import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Login() {
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');
const[alertmsg,setAlertmsg]=useState(false);
const history=useHistory();
const {getloggedIn}=useContext(AppContext);

const loginHandler=async(e)=>{
e.preventDefault();
if(!email||!password){
   setAlertmsg(true)
  //close after some time
   return setTimeout(()=>{
    return setAlertmsg(false)

  },3000);
}

const user=await axios.post('/auth/login',{email,password});
if(user){
// window.location.reload();
await getloggedIn();
toast.info('login successfully ',{position:toast.POSITION.TOP_CENTER})
history.push('/');
}else{
toast.error('invalid user details',{position:toast.POSITION.TOP_CENTER})
}

}


    return (
        <div className="container py-5">
        <h1 className="text-center fw-bold py-3">Login form</h1>
        <div className="row p-2">
            <div className="col-md-6 mx-auto shadow-lg p-4 mb-5 bg-body" 
            style={{borderRadius:"2rem"}}>
            {alertmsg&&(<div className="alert alert-danger alert-dismissible fade show rounded-3" role="alert">
  <strong>error ! </strong> All fields are required below.
</div>)}
            <form className="text-dark" style={{padding:"1rem"}} onSubmit={loginHandler}>
  <div className="mb-4">
    <label htmlFor="email" className="form-label fs-5">Email</label>
    <input type="email" className="form-control" id="email"
    placeholder="email..."
     onChange={(e)=>setEmail(e.target.value)}/>
  </div>
  <div className="mb-4">
    <label htmlFor="password" className="form-label fs-5">Password</label>
    <input type="password" className="form-control" id="password"
    placeholder="password..."
     onChange={(e)=>setPassword(e.target.value)}/>
  </div>
  <div className="d-grid gap-4">
  <button className="btn btn-primary" type="submit">Login</button>
</div>
</form>
<p className="text-center text-dark">if you have not your account  <NavLink exact to="/signup">create your account</NavLink> </p>



            </div>
        </div>

            
        </div>
    )
}

export default Login
