import React, { useState } from 'react'
import './login.css';
import { login, signup } from '../../Firebase';
import netflix_spinner from '../../Assets/netflix_spinner.gif'


function Login() {

  const [sign, setSign] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (sign === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  }

  return (
    loading? <div className="login_spinner">
      <img src={netflix_spinner} alt="" />
    </div>:
    <div className='login'>
      <img src='' className='login-logo' alt="" />
      <div className="login-form">
        <h1>{sign}</h1>
        <form action="">
          {sign === "Sign Up" ?
            <input value={name} onChange={(e) => { setName(e.target.value) }}
              placeholder='Your Name' type="text" /> : <></>}
          <input value={email} onChange={(e) => { setEmail(e.target.value) }}
            type="email" placeholder='Email' />
          <input value={password} onChange={(e) => { setPassword(e.target.value) }}
            type="password" placeholder='Password' />
          <button onClick={user_auth} type='submit'>{sign}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Helps?</p>
          </div>
        </form>
        <div className="form-switch">
          {sign === "Sign In" ? <p>New to Netflix? <span onClick={() => { setSign("Sign Up") }}>Sign Up Now</span></p> :
            <p>Already have account? <span onClick={() => { setSign("Sign In") }}>Sign In Now</span></p>
          }
        </div>
      </div>
    </div>
  )
}

export default Login