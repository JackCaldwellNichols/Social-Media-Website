import React, { useContext, useState } from 'react'
import "../../styles/update.css"
import { makeRequest } from "../../axios";
import {useMutation, useQueryClient} from 'react-query'
import { AuthContext } from '../../context/authContext';

const Update = ({setOpenUpdate, user}) => {
  const {currentUser} = useContext(AuthContext)
    const [cover, setCover] = useState(null)
    const [profile, setProfile] = useState(null)
    const [texts, setTexts] = useState({
        username: "",
        name: ""
    })

    const upload = async (file) => {
        try{
          const formData = new FormData()
          formData.append("file", file)
          const response = await makeRequest.post("/upload", formData)
          return response.data
          
        }catch(err){
          console.log(err)
        }
      }

const handleChange = (event) => {
    setTexts((prev) => ({...prev, [event.target.name]: [event.target.value]}))
}

const queryClient = useQueryClient()

  const mutation = useMutation((user)=> {
    return makeRequest.put("/users/", user)
  },{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['users'])
      
    },
    
  })

  const handleSubmit = async (e) =>{
    e.preventDefault()
    let coverUrl;
    let profileUrl;

    coverUrl = cover ? await upload(cover) : user.coverPic
    profileUrl = profile ? await upload(profile) : user.profilePic

    console.log(cover)

    mutation.mutate({...texts, coverPic: coverUrl, profilePic: profileUrl})
    setOpenUpdate(false)
    
  };

  console.log(currentUser)

  return (
    <div className='update'>
      Update
      <form>
        <input type='file' onChange={(e)=>setCover(e.target.files[0])} />
        <input type='file' onChange={(e)=>setProfile(e.target.files[0])}/>
        <input type='text' name='name' value={texts.name} onChange={handleChange} placeholder="Name"/>
        <input type='text' name='username' value={texts.username} onChange={handleChange} placeholder="Username"/>
        <button onClick={handleSubmit}>Save changes</button>
      </form>
      <button onClick={()=>setOpenUpdate(false)}>X</button>
    </div>
  )
}

export default Update
