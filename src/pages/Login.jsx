import React, {useContext} from 'react'
import { AuthContext } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {

    const {login} = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogin = () =>{
        login()
        navigate('/')
    }

    return (
            <div className=' login'>
                <div className="card">
                    <div className="left">
                        <h1 >Welcome</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Id, ea consequuntur doloremque nisi, repellendus blanditiis iure suscipit, 
                            saepe magnam explicabo animi earum nemo veritatis. Perspiciatis, mollitia ipsam? 
                            Alias, aliquid iure.
                        </p>
                        <span>Don't have an account yet?</span>
                        <Link to="/signup">
                            <button>Sign up here.</button>
                        </Link>
                    </div>
                    <div className="right">
                        <h1>Login</h1>
                        <form>
                            <input type='text' placeholder= 'Username'/>
                            <input type='password' placeholder= 'Password'/>
                            <button onClick={handleLogin}>Log in</button>
                        </form>   
                    </div>
                </div>
            </div>
    )
}

export default Login;