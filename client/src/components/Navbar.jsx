import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import '../styles/navbar.css'
import { style } from '@mui/system';
import { DarkModeContext } from '../context/darkModeContext';
import { AuthContext } from '../context/authContext';
import {
    useQuery,
    useMutation,
    useQueryClient,
  } from 'react-query'
  import { makeRequest } from '../axios.js'



const Navbar = () => {
    const {toggleTheme, theme} = useContext(DarkModeContext)
    const {currentUser} = useContext(AuthContext)
    
    const userId = parseInt(currentUser.id)

    const { isLoading, error, data } = useQuery(['users'], () =>

    makeRequest.get("/users/find/" + userId).then(res=>{
        return res.data
      })
    );

  return (
    <div className='navbar' style={{backgroundColor: theme === 'dark' ? '#3c3c3c' : 'white', borderBottom: theme === 'dark' ? '1px solid black' : '1px solid lightgrey' }}>
        
        <div className="nav-left">
            <Link to="/" style={{textDecoration: 'none', color: theme === 'dark' ? 'white' : 'black'}}>
                <span >My social network</span>
            </Link>
            <HomeOutlinedIcon />
            <GridViewOutlinedIcon />
            { theme === 'light' ? (
            <button onClick={toggleTheme} style={{color: theme === 'dark' ? "white" : 'black', background: 'none', border: 'none'}}>
                 <DarkModeOutlinedIcon />
             </button>
            ) : (
            <button onClick={toggleTheme} style={{color: theme === 'dark' ? "white" : 'black', background: 'none', border: 'none'}}>
                <WbSunnyOutlinedIcon />
            </button>
            )
            }
            <div className='search' style={{border: theme === 'dark' ? 'none' : '1px solid lightgray'}}>
                <SearchOutlinedIcon />
                <input type='search' /> 
            </div>
        </div>
        <div className="nav-right">
            <PersonOutlineOutlinedIcon />
            <EmailOutlinedIcon />
            <NotificationsOutlinedIcon />
            <div className='user'>
                <Link to={`/profile/${currentUser.id}`}>
                   
                     <img src={"/upload/" + currentUser.profilePic}/>    
                    
                </Link>
                <span>{currentUser.name}</span>
            </div>
        </div>

    </div >
  )
}

export default Navbar