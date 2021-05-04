import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context';
// import Auth from './Auth'
import Empty from './Empty';
import Loading from './Loading';
import Note from './Note';


function Home() {
  const {loggedIn}=useContext(AppContext);
  const [loading,setLoading]=useState(false);
  const[note,setNote]=useState([]);
console.log(note);

const FetchData=async()=>{
setLoading(true);
  const result=await axios.get('/notes');
setNote(result.data);
setLoading(false);
}

useEffect(()=>{

  FetchData()
},[])


if(loading){
  return(<><Loading/></>)
}





  return (
    <div className="container py-4" style={{height:note.length<=3?"100vh":"100%"}}>
      <h1 className="text-center mb-5">
        Notes
      </h1>


      {
        note.length<=0&&<Empty/>
      }
      <div className="row row-cols-1 row-cols-md-3 g-4 py-3">

{note.map((item)=>{
  return<Note {...item} key={item._id} FetchData={FetchData}/>
})}

    </div>
      
    </div>
  )
}

export default Home
