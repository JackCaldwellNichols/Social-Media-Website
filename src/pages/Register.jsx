import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/register.css'

const Register = () => {
  return (
    
       <div className='register'>
            <div className="card">
                <div className="reg-left">
                    <h1>Sign up</h1>
                    <form>
                        <input type='email' placeholder= 'Email'/>
                        <input type='text' placeholder= 'Username'/>
                        <input type='password' placeholder= 'Password'/>
                        <button>Sign up</button>
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