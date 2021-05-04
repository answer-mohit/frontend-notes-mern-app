import axios from 'axios';
import React, { useContext, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom';
import { AppContext } from '../context';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Addnote() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [passwordVerify,setPasswordVerify]=useState('');
  const[alertmsg,setAlertmsg]=useState(false);
const [checkpass,setCheckpass]=useState(false);
const {getloggedIn}=useContext(AppContext);

const history=useHistory();
  const singupHandler=async(e)=>{
e.preventDefault();
if(!name||!email||!password||!passwordVerify){

  setAlertmsg(true)
  return setTimeout(()=>{
    return setAlertmsg(false)

  },5000)

}
if(password !==passwordVerify){
return setCheckpass(true) 
}
const result= await axios.post("/auth",{name,email,password,passwordVerify});
if(result){
  // window.location.reload();
  await getloggedIn();
  history.push('/');
toast.info('your account created succefully',{position:toast.POSITION.TOP_CENTER });
}else{
  toast.error('you are unable to create account',{position:toast.POSITION.TOP_CENTER})
}
 

}
  return (
        <div className="container py-5">
        <h1 className="text-center mb-3">Signup form</h1>
        <div className="row p-2">
            <div className="col-md-6 mx-auto shadow-lg p-4 mb-5 bg-body"
             style={{borderRadius:"2rem"}}>
     {alertmsg&&(<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>error ! </strong> All fields are required below.
</div>)}

            <form className="text-dark py-3" onSubmit={singupHandler}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label fs-5">username</label>
    <input type="name" className="form-control"
     id="name"
    placeholder="username..."
      onChange={(e)=>setName(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label fs-5">email</label>
    <input type="email" className="form-control"
    placeholder="email..."
     id="email" onChange={(e)=>setEmail(e.target.value)}
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label fs-5">password</label>
    <input type="password" className="form-control" 
    placeholder="password..."
    id="password" 
    onChange={(e)=>setPassword(e.target.value)}/>
{checkpass&&(<p className="alert alert-danger my-3 p-2 alert-dismissible fade show">
  <strong>Warning ! </strong> password should be same

</p>)}

  </div>
  <div className="mb-3">
    <label htmlFor="passwordConfirm" className="form-label fs-5">Confirm password</label>
    <input type="password" className="form-control"
     id="passwordConfirm" 
    placeholder="confirm password..."
     onChange={(e)=>setPasswordVerify(e.target.value)}/>

  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-primary" type="submit">Signup</button>
</div>
</form>
        <p className="text-center text-dark">if your account exists <NavLink exact to="/login">
      login here</NavLink> </p>

        </div>
        </div>

            
        </div>
    )
}

export default Addnote
