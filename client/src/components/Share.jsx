import "../styles/share.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import {useMutation, useQueryClient, useQuery} from 'react-query'
import { useLocation } from "react-router-dom";
import { makeRequest } from "../axios";

const Share = () => {
  const {currentUser} = useContext(AuthContext)
  const userId = parseInt(currentUser.id)

  const {  data } = useQuery(['users'], () =>
  
  makeRequest.get("/users/find/" + userId).then(res=>{
      return res.data
    })
  );

  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState('')

  const upload = async () => {
    try{
      const formData = new FormData()
      formData.append("file", file)
      const response = await makeRequest.post("/upload", formData)
      return response.data
    }catch(err){
      console.log(err)
    }
  }

  const queryClient = useQueryClient()

  const mutation = useMutation((newPost)=> {
    return makeRequest.post("/posts", newPost)
  },{
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries(['posts'])
      
    },
    
  })

  const handleClick = async (e) =>{
    e.preventDefault()
    let imgUrl = ""
    if(file) imgUrl = await upload()
    mutation.mutate({desc, img: imgUrl})
    setDesc('')
    setFile(null)
  };


  return (


    <div className="share">
      <div className="share-container">
        <div className="share-top">
          <div className="share-top-left">
          <img src
           
            alt=""
          />
          <input type="text" placeholder={`What's on your mind?`} value = {desc} onChange={(e)=>setDesc(e.target.value)}/>
          </div>
          <div className="share-top-rigt">
            {file && <img className="filename" alt="" src={URL.createObjectURL(file)}/> }
          </div>
        </div>
        <hr />
        <div className="share-bottom">
          <div className="share-left">
            <input type="file" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])}/>
            <label htmlFor="file">
              <div className="share-item">
                <img src='https://cdn.pixabay.com/photo/2015/02/07/10/10/giraffes-627031_960_720.jpg' alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="share-item">
              <img src='https://cdn.pixabay.com/photo/2015/06/23/09/13/music-818459_960_720.jpg' alt="" />
              <span>Add Place</span>
            </div>
            <div className="share-item">
              <img src='https://cdn.pixabay.com/photo/2015/03/08/17/25/musician-664432_960_720.jpg' alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="share-right">
            <button onClick={handleClick}>Share</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;