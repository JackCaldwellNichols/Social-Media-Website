import React, { useContext, useState } from 'react'
import '../styles/profile.css'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { AuthContext } from '../context/authContext';
import Posts from '../components/Posts.jsx'
import { DarkModeContext } from '../context/darkModeContext';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'
import { makeRequest } from '../axios.js'
import { useLocation } from 'react-router-dom';
import Update from '../components/update/Update.jsx';

const Profile = () => {

  const {currentUser} = useContext(AuthContext)
  const {theme} = useContext(DarkModeContext)
  const [openUpdate, setOpenUpdate] = useState(false)

  const userId = parseInt(useLocation().pathname.split('/')[2])
  const { isLoading, error, data } = useQuery(["user"], () =>
  makeRequest.get("/users/find/" + userId).then(res=>{
    return res.data
  })
);

console.log("FROM DATA", data)

const { isLoading: relIsLoading, data: relationshipData } = useQuery(["relationship"], () =>
makeRequest.get("/relationships?followedUseId=" + userId).then(res=>{
  return res.data
})
);

const queryClient = useQueryClient()

const mutation = useMutation((following)=> {
    if(following) return makeRequest.delete("/relationships?userId="+ userId);
   
    return makeRequest.post("/relationships", {userId})
},
{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries(['relationship'])
    
  },
  
})

const handleClick = () => {
    mutation.mutate(relationshipData.includes(currentUser.id))
}



  return (
    <div className='profile' >
    { isLoading ? ("Loading") : ( 
    
    <> <div className="images">
          <img src={"/uploads/" + data.coverPic} className='banner' alt=''/>
          <img src={"/uploads/" + data.profilePic} className='profile-pic' alt=''/>
      </div>
      <div className="profile-container" >
        <div className="user-profile-info" style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
          <div className="profile-left">
            <a href='https://facebook.com' target='_blank'>
              <FacebookOutlinedIcon fontSize='large'/>
            </a>
            <a href='https://instagram.com' target='_blank'>
              <InstagramIcon fontSize='large'/>
            </a>
            <a href='https://linkedin.com' target='_blank'>
              <LinkedInIcon fontSize='large'/>
            </a>
            <a href='https://twitter.com' target='_blank'>
              <TwitterIcon fontSize='large'/>
            </a>
          </div>
          <div className="profile-center">
            <span>{data.name}</span>
            {relIsLoading ? "Loading" : 
              currentUser.id === userId ? (
            <button onClick={()=>setOpenUpdate(true)}>Update</button>) 
            : 
            (<button onClick={handleClick}>{relationshipData.includes(currentUser.id) ? "Following" : "Follow"}</button>)}
          </div>
          <div className="profile-right">
            <EmailOutlinedIcon />
            <HorizontalRuleOutlinedIcon />
          </div>

        </div>
        <Posts userId={userId}/>
      </div> 
      </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}

export default Profile