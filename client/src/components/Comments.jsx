import React, { useContext, useState } from 'react'
import '../styles/comments.css'
import { AuthContext } from '../context/authContext';
import { makeRequest } from '../axios.js'
import moment from 'moment';
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'

const Comments = ({postId}) => {
  const [desc, setDesc] = useState('')
  const { isLoading, error, data } = useQuery(['comments'], () =>

  makeRequest.get('/comments?postId='+postId).then(res=>{
    return res.data
  })
)

const queryClient = useQueryClient()

const mutation = useMutation((newComment)=> {
  return makeRequest.post("/comments", newComment)
},{
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries(['comments'])
    
  },
  
})

const handleClick = async (e) =>{
  e.preventDefault()
  mutation.mutate({desc, postId})
  setDesc('')
};

const {currentUser} = useContext(AuthContext)

    
  return (
    <div className='comments'>
        <div className="write-comment">
            <img src={currentUser.profilePic} alt=''/>
            <input type='text' placeholder='Say something' value = {desc} onChange={e=>setDesc(e.target.value)}/>
            <button onClick={handleClick}>Send</button>
        </div>
      {isLoading ? 
      (<span>Loading comments...</span>) 
      :  
      data.map(comment =>(
        <div className="comment">
            <img src={comment.profilePic} alt=''/>
           
                <div className="comment-info">
                    <span>{comment.name}</span>
                    <p>{comment.desc}</p>
                </div>
                    <span className='comment-date'>{moment(comment.createdAt).fromNow()}</span> 
        </div>
      ))}
    </div>
  )
}

export default Comments
