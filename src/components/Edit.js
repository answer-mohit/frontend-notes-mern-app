import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
function Edit() {
  const {id}=useParams();
  const history=useHistory()
  const [title,setTitle]=useState('');
  const [body,setBody]=useState('')
  const[alertmsg,setAlertmsg]=useState(false);

const savedFetch=async()=>{
  const result =await axios.get(`/notes/detail/${id}`);
console.log(result.data);
setTitle(result.data.title);
console.log(title)
setBody(result.data.body);
} 

useEffect(()=>{
savedFetch()
},[]);

const editHandler=async(e)=>{
e.preventDefault();
if(!title||!body){

  setAlertmsg(true)
return  setTimeout(()=>{
    return setAlertmsg(false)

  },5000)

}
const updateNote=await axios.put(`/notes/update/${id}`,{
  title,body
});
if(updateNote){
  history.push('/');
  toast.success('updated successfully',{
position:toast.POSITION.TOP_CENTER
  })
  // alert('update succesfully');
}

}


    return (
        <div className="container py-5">
        <h1 className="text-center fw-bold mb-3">Edit Notes</h1>
        <div className="row p-2">
            <div className="col-md-8 mx-auto shadow-lg p-4 mb-5 bg-body" style={{borderRadius:"2rem"}}>

            {alertmsg&&(<div className="alert alert-danger alert-dismissible fade show" role="alert">
  <strong>error ! </strong> All fields are required below.
</div>)}
            <form className="text-dark py-3" onSubmit={editHandler} >
  <div className="mb-3">
    <label htmlFor="title" className="form-label fs-5">Title</label>
    <input type="text" className="form-control" id="title"
    value={title}
    placeholder="write the title..."
     onChange={(e)=>setTitle(e.target.value)} />
  </div>
  <div className="mb-3">
    <label htmlFor="detail" className="form-label fs-5">Notes</label>
    <textarea className="form-control" id="detail"
    placeholder="write the details..."
    value={body}
     rows="5" onChange={(e)=>setBody(e.target.value)} />
  </div>
  <div className="d-grid gap-2">
  <button className="btn btn-danger" type="submit">Update the notes</button>
</div>
</form>



            </div>
        </div>

            
        </div>
    )
}

export default Edit
