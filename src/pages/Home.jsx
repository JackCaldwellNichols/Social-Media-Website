import React, {useContext} from 'react'
import '../styles/home.css'
import Stories from '../components/Stories.jsx'
import Posts from '../components/Posts.jsx'



const Home = () => {



  return (
    <div className='home'>
      <Stories />
      <Posts />
    </div>
  )
}

export default Home