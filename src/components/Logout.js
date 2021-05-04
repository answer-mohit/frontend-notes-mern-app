import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router'
import { AppContext } from '../context';

function Logout() {
  const history=useHistory();
const {getloggedIn,loggedIn}=useContext(AppContext)
  const logoutHandler=async()=>{
    const result=await axios.get('/auth/logout');
    if(result){
      window.location.reload();
      await getloggedIn()
      
      
    }
   return  history.push('/login');
  }
  

  return (
        <>
          <button  className="btn btn-light m-1 px-5" onClick={logoutHandler}>logout</button>   
        </>
    )
}

export default Logout
