import React, {useContext} from 'react'
import '../styles/home.css'
import Stories from '../components/Stories.jsx'
import Posts from '../components/Posts.jsx'
import Share from '../components/Share.jsx'



const Home = () => {

  return (
    <div className='home'>
      <Stories />
      <Share />
      <Posts />
    </div>
  )
}

export default Home