import React, {useContext} from 'react'
import Icon from '../assets/icon1.png'
import '../styles/leftbar.css'
import { AuthContext } from '../context/authContext'
import { DarkModeContext } from '../context/darkModeContext'
import {
  useQuery,
  useMutation,
  useQueryClient,
} from 'react-query'
import { makeRequest } from '../axios.js'


const Leftbar = () => {

  const {currentUser} = useContext(AuthContext)
  const userId = parseInt(currentUser.id)

  const { isLoading, error, data } = useQuery(['users'], () =>

  makeRequest.get("/users/find/" + userId).then(res=>{
      return res.data
    })
  );

  const {theme} = useContext(DarkModeContext)

  return (
    <div className='leftbar' style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white'}}>
      <div className="left-container">
        <div className="left-menu">
          <div className="user-left">
              <img  src={currentUser.profilePic} alt='' />
              <span></span>
          </div>
          <div className="left-items">
            <img src={Icon} alt='' style={{width: '30px', height: '30px'}}/>
            <span>Friends</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Groups</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Marketplace</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Watch</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="left-menu">
          <span>Your shortcuts</span>
          <div className="left-items">
            <img src={Icon} alt='' style={{width: '30px', height: '30px'}}/>
            <span>Friends</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Groups</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Marketplace</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Watch</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Memories</span>
          </div>
        </div>
        <hr/>
        <div className="left-menu">
          <span>Others</span>
          <div className="left-items">
            <img src={Icon} alt='' style={{width: '30px', height: '30px'}}/>
            <span>Friends</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Groups</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Marketplace</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Watch</span>
          </div>
          <div className="left-items">
            <img src={Icon} style={{width: '30px', height: '30px'}}/>
            <span>Memories</span>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Leftbar