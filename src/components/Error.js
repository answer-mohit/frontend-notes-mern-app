import React from 'react'
import { NavLink } from 'react-router-dom'

function Error() {
    return (
    <div className="container text-center py-4" style={{height:'100vh'}}>
        
        <p className=" text-center text-danger fst-italic fw-bold" 
        style={{fontSize:"3.5rem"}}>
        404, opps!!
        <br/>
         Page does not exists
            </p>
<p className="fst-italic text-primary">
    if you are unauthorized ! then <NavLink exact className="btn text-light" to="/login">login here</NavLink>
</p>
        </div>
    )
}

export default Error
