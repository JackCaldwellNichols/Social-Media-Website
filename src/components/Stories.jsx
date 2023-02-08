import React, {useContext} from 'react'
import { AuthContext } from '../context/authContext.js'
import '../styles/stories.css'
import { DarkModeContext } from '../context/darkModeContext.js'

const Stories = () => {
    const {theme} = useContext(DarkModeContext) 
    const {currentUser} = useContext(AuthContext)
    const stories = [
        {
            id:1, 
            name: "James Doe", 
            img: "https://cdn.pixabay.com/photo/2017/12/10/17/40/prague-3010407_960_720.jpg"
        },
        {
            id:2, 
            name: "James Doe", 
            img: "https://cdn.pixabay.com/photo/2016/11/21/17/44/arches-national-park-1846759_960_720.jpg"
        },
        {
            id:3, 
            name: "James Doe", 
            img: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg"
        },
    ]
  return (
    <div className='story-row' style={{backgroundColor: theme === 'dark' ? 'black' : '#FAF9F6'}}>
            <div className='story'>
                <img src={currentUser.profilePic} />
                <span>{currentUser.name}</span>
                <button>+</button>
            </div>
        {stories.map((story, id) => (
            <div className='story' key={story.id}>
                <img src={story.img} />
                <span>{story.name}</span>
            </div>
        ))}
    </div>
  )
}

export default Stories