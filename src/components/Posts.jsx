import React from 'react'
import Post from './Post.jsx'
import '../styles/posts.css'

const Posts = () => {

  const posts = [
    {
      id: 1,
      name: "James Doe",
      profilePic: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg",
      userId: 1,
      img: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
      id: 2,
      name: "James Doe",
      profilePic: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg",
      userId: 1,
      img: "https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_960_720.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
    {
      id: 3,
      name: "James Doe",
      profilePic: "https://cdn.pixabay.com/photo/2017/08/01/20/52/people-2567915_960_720.jpg",
      userId: 1,
      img: "https://cdn.pixabay.com/photo/2016/08/03/14/24/roses-1566792_960_720.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
    },
  ]

  return (
    <div className='posts'>
      {posts.map(post => (
        <Post post={post} key={post.id}/>
      ))}
    </div>
  )
}

export default Posts