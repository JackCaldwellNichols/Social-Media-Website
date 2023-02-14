import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/authContext'
import { Link, useNavigate } from 'react-router-dom'

import '../styles/login.css'

const Login = () => {

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })
    
    const [err, setErr] = useState(null)
    
    const handleChange = event => {
        setInputs(prev=>({...prev, [event.target.name]: event.target.value}))
    }

    const {login} = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogin = async (event) =>{
        event.preventDefault()
        try{
            await login(inputs)
            navigate('/')
        }catch(err){
            setErr(err.response.data)
        }
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
                            <input type='text' placeholder= 'Username' name='username' onChange={handleChange}/>
                            <input type='password' placeholder= 'Password' name='password' onChange={handleChange}/>
                            {err && <span>{err}</span>}
                            <button onClick={handleLogin}>Log in</button>
                        </form>   
                    </div>
                </div>
            </div>
    )
}

export default Login;