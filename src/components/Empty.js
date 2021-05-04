import React from 'react'
import { NavLink } from 'react-router-dom'

function Empty() {
    return (
    <div className="container text-center py-5" style={{height:'80vh'}}>
        <p className="text-center text-primary lh-lg fw-bold fst-italic" style={{fontSize:"3rem"}}>
you have no notes <br/>
add the notes 
        
        </p>
        
 <NavLink exact className="fst-italic fs-6  btn btn-light" to="/add">add notes here</NavLink>


            
        </div>
    )
}

export default Empty
