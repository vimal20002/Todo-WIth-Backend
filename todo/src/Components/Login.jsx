import React from 'react'
import mw from "./images/mw.png";
import ww from "./images/ww.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login, register, glogin } from '../redux/features/userSlice';
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();



  const loginB = () => {

    document.getElementById('lgf').style.display = "inline-flex"
    document.getElementById('aut').style.display = "none"
    document.getElementById('lwg').style.display = "none"

  }
  const registerB = () => {
    document.getElementById('rgf').style.display = "inline-flex"
    document.getElementById('aut').style.display = "none"
    document.getElementById('lwg').style.display = "none"

  }
  const back = () => {
    document.getElementById('lgf').style.display = "none"
    document.getElementById('aut').style.display = "inline-flex"
    document.getElementById('rgf').style.display = "none"
    document.getElementById('lwg').style.display = "inline-block"


  }
  const init6 = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpass: ""
  }
  const init7 = {
    fname: "",
    email: "",
  }
  const [formValue, setFormValue] = useState(init6);
  const [formValue1, setFormValue1] = useState(init7);
  const { email, password, cpass } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })
  }
  const submitLogin = (e) => {

    e.preventDefault();
    document.body.style.backgroundImage = "none";

    if (email && password) {
      dispatch(login({ formValue, history }));
      // history.push('/');z
    }
  }
  const submitRegister = (e) => {
    e.preventDefault();
    document.body.style.backgroundImage = "none";
    document.getElementById("rgf").style.display = "none";
    document.getElementById("aut").style.display = "inline-flex";
    if (email && password && cpass) {
      if (password === cpass) {
        dispatch(register({ formValue, history }))
      }
    }
  }

  //Google Login
  const clientId = '406686586253-89bjvoii7o0f9d2bcu3vogf1dtnmjgib.apps.googleusercontent.com'

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: ''
      });
    };
    // console.log(initClient)
    gapi.load('client:auth2', initClient);
  });
  const onSuccess = (resp) => {
    console.log(resp)
    const nm = resp.profileObj.familyName;
    const em = resp.profileObj.email;
    setFormValue1({ ...formValue1, fname: nm, email: em })
  }
  useEffect(() => {
    if (formValue1.fname !== "" && formValue1.email !== "") {
      dispatch(glogin({ formValue1, history }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValue1])
  const onFailure = (err) => {
  }

  return (
    <div className="ni" id="ni">
      <img src={mw} className="mw" alt="" />
      <img src={ww} className="ww" alt="" />
      <div className="wlc">WELCOME!!!</div>
      <div className="rgf" id="rgf">
        <div className="usi">
          <img src="https://cdn-icons-png.flaticon.com/128/4883/4883294.png" alt="register" />
        </div>
        <input type="text" placeholder="First name" name="fname" className="em" onChange={onInputChange} />
        <input type="text" placeholder="Last name" name="lname" className="em" onChange={onInputChange} />
        <input type="email" placeholder="Enter your email" required className="em" name="email" onChange={onInputChange} />
        <input type="password" placeholder="Enter your password" required className="ps" name="password" onChange={onInputChange} />
        <input type="password" placeholder="Confirm your password" required className="ps" name="cpass" onChange={onInputChange} />
        <div className="lg" onClick={submitRegister}>Register</div>
        <div className="back" onClick={back}>Back</div>
      </div>

      <div className="lgf" id="lgf">
        <div className="us"> <img src="https://cdn-icons-png.flaticon.com/128/1177/1177568.png" alt="user" /> </div>
        <input type="email" placeholder="Enter your email" required className="em" name='email' value={email} onChange={onInputChange} />
        <input type="password" placeholder="Enter your password" required className="ps" name='password' value={password} onChange={onInputChange} />
        <div className="lg" onClick={submitLogin}>Login</div>
        <div className="back1" onClick={back} >Back</div>

      </div>

      <div className="aut" id="aut" >
        <div className="lgn" onClick={loginB} >Login</div>
        <div>or</div>
        <div className="rgs" onClick={registerB} >Register</div>
        <div>or</div>

      </div>
      <div className='lwg' id='lwg'>
        <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
        />
      </div>


    </div>
  )
}

export default Login