import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
function Addnote() {
const [title,setTitle]=useState('');
const [body,setBody]=useState('');
const history=useHistory();
const[alertmsg,setAlertmsg]=useState(false);

const addHandler=async(e)=>{
e.preventDefault();
if(!title||!body){

  setAlertmsg(true)
return  setTimeout(()=>{
    return setAlertmsg(false)

  },5000)

}
const newNote=await axios.post('/notes/add',{
  title,body
});
if(newNote){

  toast.info('your note succesfully added',{position:toast.POSITION.TOP_CENTER});
  history.push('/');
}

}
    return (
        <div className="container py-5">
        <h1 className="text-center mb-3">Add Notes</h1>
        <div className="row p-2">
            <div className="col-md-8 mx-auto shadow-lg p-4 mb-5 bg-body" style={{borderRadius:"2rem"}}>
            {alertmsg&&(<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>error ! </strong> All fields are required below.
</div>)}

            <form className="text-dark py-3" onSubmit={addHandler}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label fs-5">Title</label>
    <input type="text" 
    placeholder="write the title..."
    className="form-control" id="title" onChange={(e)=>setTitle(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="detail" className="form-label fs-5">Notes</label>
    <textarea className="form-control" 
    placeholder="write the details..."
    id="detail" rows="5" onChange={(e)=>setBody(e.target.value)}/>
  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-danger" type="submit">Add notes</button>
</div>
</form>



            </div>
        </div>

            
        </div>
    )
}

export default Addnote
