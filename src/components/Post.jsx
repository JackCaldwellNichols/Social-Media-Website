import React, { useContext } from 'react'
import { DarkModeContext } from '../context/darkModeContext'
import {Link} from 'react-router-dom'
import '../styles/post.css'
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';

const Post = ({post}) => {

const liked = false

const {theme} = useContext(DarkModeContext)

  return (
    <div className='post' style={{backgroundColor: theme === 'dark' ? 'black' : 'white'}}>
        <div className="container">
        <div className="p-user">
            <div className='post-user-box'>
                <img src={post.profilePic} />
                <div className='post-user-details'>
                    <Link to= {`/profile${post.userId}`} style={{textDecoration: 'none', color: 'inherit'}}>
                        <span className='post-name'>{post.name}</span>
                    </Link>
                        <span className='post-date'>1 minute ago</span>
                </div>
                
            </div>
              <HorizontalRuleOutlinedIcon />
        </div>
        <div className="content">
            <p>{post.desc}</p>
            <img src={post.img}/>
        </div>
        <div className="toolbar">
            <div className='toolbar-item'>
                {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
                12 likes
            </div>
            <div className='toolbar-item'>
                <TextsmsOutlinedIcon />
                12 comments
            </div>
            <div className='toolbar-item'>
                <ShareOutlinedIcon />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Post