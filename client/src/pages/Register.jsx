import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/register.css'
import axios from 'axios'

const Register = () => {

const navigate = useNavigate()
const [inputs, setInputs] = useState({
    username: '',
    email: '',
    password: '',
    name: '',
})

const [err, setErr] = useState(null)

const handleChange = event => {
    setInputs(prev=>({...prev, [event.target.name]: event.target.value}))
}

const handleClick = async (event) => {
    event.preventDefault()
    try{
        await axios.post('http://localhost:8800/api/auth/register', inputs)
        navigate('/login')
    }catch(err){
        setErr(err.response.data)
        console.log(err.response.data)
    }
    
}




  return (
    
       <div className='register'>
            <div className="card">
                <div className="reg-left">
                    <h1>Sign up</h1>
                    <form>
                        <input type='text' placeholder= 'Username' name='username' onChange={handleChange}/>
                        <input type='email' placeholder= 'Email' name='email' onChange={handleChange}/>
                        <input type='password' placeholder= 'Password' name='password' onChange={handleChange}/>
                        <input type='text' placeholder= 'Name' name='name' onChange={handleChange}/>
                        {err && <span>{err}</span>}
                        <button onClick={handleClick}>Sign up</button>
                    </form>   
                </div>
                <div className="reg-right">
                    <h1 >Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Id, ea consequuntur doloremque nisi, repellendus blanditiis iure suscipit, 
                        saepe magnam explicabo animi earum nemo veritatis. Perspiciatis, mollitia ipsam? 
                        Alias, aliquid iure.
                    </p>
                    <span>Already have an account?</span>
                    <Link to="/login">
                        <button>Log in</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    
  )
}

export default Register