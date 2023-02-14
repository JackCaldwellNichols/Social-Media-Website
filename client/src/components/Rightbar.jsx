import React, {useContext} from 'react'
import { DarkModeContext } from '../context/darkModeContext';
import '../styles/rightbar.css'

const Rightbar = () => {
  const {theme} = useContext(DarkModeContext)
  return (
    <div className='rightbar' style={{backgroundColor: theme === 'dark' ? 'black' : '#FAF9F6'}}>
      <div className="right-container" >
        <div className="right-item" style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
          <span>Suggestions for you</span>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span>
            </div>
            <div className="buttons">
              <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span>
            </div>
            <div className="buttons">
              <button className='follow'>Follow</button>
              <button className='dismiss'>Dismiss</button>
            </div>
          </div>
        </div>
        <div className="right-item" style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
          <span>Latest Activities</span>
            <div className="user-right" style={{color: theme === 'dark' ? "white" : 'black'}}>
            <div className="user-info" style={{color: theme === 'dark' ? "white" : 'black'}}>
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> changed their profile picture
              </span>
            </div>
            <span style={{color: theme === 'dark' ? "white" : 'black'}}>1 minute ago</span>
          </div>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> changed their profile picture
              </span>
            </div>
            <span style={{color: theme === 'dark' ? "white" : 'black'}}>1 minute ago</span>
          </div>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> changed their profile picture
              </span>
            </div>
            <span style={{color: theme === 'dark' ? "white" : 'black'}}>1 minute ago</span>
          </div>
            <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> changed their profile picture
              </span>
            </div>
            <span style={{color: theme === 'dark' ? "white" : 'black'}}>1 minute ago</span>
          </div>
        </div>
        <div className="right-item" style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
          <span>Online friends</span>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span className="online"></span>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span className="online"></span>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> 
            </div>
          </div>
          <div className="user-right">
            <div className="user-info">
              <img src='https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_960_720.jpg'/>
              <span className="online"></span>
              <span style={{color: theme === 'dark' ? "white" : 'black'}}>John Doe</span> 
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rightbar