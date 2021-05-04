import axios from 'axios';
import React from 'react'
import {NavLink} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../App.css"

toast.configure();
function Note({_id,title,body,FetchData}) {


const deleteHandler=async(id)=>{
  const deletedNote=await axios.delete(`/notes/delete/${id}`);
console.log(deletedNote)
  if(deletedNote){
    await FetchData();
    toast.info('deleted succesfully',{position:toast.POSITION.TOP_CENTER})
  }
}

    return (
        <>
       <div className="col note text-dark">
    <div className="card h-100" style={{borderRadius: "1rem"}}>
    <h5 className="card-header text-center fw-bold text-danger p-3">{title}</h5>
      <div className="card-body">
        {/* <h5 className="card-title">{title}</h5> */}
        <p className="card-text fst-italic">{body}</p>
      </div>
      <div className="card-footer">
        <div className="d-flex justify-content-between">
        <NavLink exact className="btn btn-warning" to={`/edit/${_id}`}>Edit</NavLink>
        <button className="btn btn-danger" onClick={()=>deleteHandler(_id)} >delete</button>

        </div>
      </div>
    </div>
  </div>
        </>
    )
}

export default Note
