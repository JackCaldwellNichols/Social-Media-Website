import React, { useContext, useState } from 'react'
import { DarkModeContext } from '../context/darkModeContext'
import {Link, useLocation} from 'react-router-dom'
import '../styles/post.css'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from 'react-query'
import { makeRequest } from '../axios.js'
import Comments from './Comments.jsx';
import moment from 'moment'
import { AuthContext } from '../context/authContext';


const Post = ({post}) => {

const {currentUser} = useContext(AuthContext)
const [show, setShow] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)
const {theme} = useContext(DarkModeContext)

const userId = parseInt(currentUser.id)

const {  userData } = useQuery(['users'], () =>

makeRequest.get("/users/find/" + userId).then(res=>{
    return res.data
  })
);

console.log(post)
const { isLoading, error, data } = useQuery(['likes', post.id], () =>
  makeRequest.get('/likes?postId='+ post.id).then(res=>{
    return res.data
  })
)

const queryClient = useQueryClient()

const mutation = useMutation((liked)=> {
    if(liked) return makeRequest.delete("/likes?postId="+post.id);
    return makeRequest.post("/likes", {postId: post.id})
},
{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries(['likes'])
  },
})

const handleLike = () => {
  mutation.mutate(data.includes(currentUser.id))
}

const deleteMutation = useMutation((postId)=> {
  return makeRequest.delete("/posts/"+postId)
},
{
onSuccess: () => {
  // Invalidate and refetch
  queryClient.invalidateQueries(['posts'])
},})

const handleDelete = () => {
  deleteMutation.mutate(post.id)
}

console.log(post)

  return (
    <div className='post' style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
        <div className="container">
        <div className="p-user">
            <div className='post-user-box'>
                <img src={"/uploads/" + post.profilePic}/>
                <div className='post-user-details'>
                    <Link to= {`/profile/${post.userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <span className='post-name'>{post.name}</span>
                    </Link>
                        <span className='post-date'>{moment(post.createdAt).fromNow()}</span>
                </div>
                
            </div>
              <MoreHorizOutlinedIcon onClick={()=>setMenuOpen(!menuOpen)}/>
              {menuOpen && post.userId === currentUser.id && (<button onClick={handleDelete}>Delete</button>)}
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={"/uploads/" + post.img}/>
        </div>
        <div className="toolbar">
            <div className='toolbar-item'>
               {isLoading ? ("Loading" )
               : data.includes(currentUser.id) ? 
               <FavoriteOutlinedIcon style={{color: 'red'}}  onClick={handleLike}/> 
               : 
               <FavoriteBorderOutlinedIcon  onClick={handleLike}/>}
               Likes
            </div>
            <div className='toolbar-item' onClick={() => setShow(!show)}>
                <TextsmsOutlinedIcon />
            </div>
            <div className='toolbar-item'>
                <ShareOutlinedIcon />
            </div>
        </div>
        {show && <Comments postId={post.id} />}
        </div>
    </div>
  )
}

export default Post