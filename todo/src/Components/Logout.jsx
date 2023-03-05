import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../App.css";
import { logout } from '../redux/features/userSlice';
import lg from './images/logout.png'
const Logout = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const lgt=()=>{
        dispatch(logout({history}))
        localStorage.removeItem("user")
    }
  return (<>
    <div className='logout' onClick={lgt}>
  <img src={lg} alt="logout" className='lgi'/>
<div className="bttn">
        Logout
        </div>
    </div>
    </>
  )
}

export default Logout