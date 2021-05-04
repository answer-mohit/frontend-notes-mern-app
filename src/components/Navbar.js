import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import Logout from './Logout';
import "../App.css";
import { AppContext } from '../context';
function Navbar() {
  const{loggedIn}=useContext(AppContext);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark p-2" style={{backgroundColor:"#845EC2"}}>
  <div className="container-fluid">
    <NavLink exact className="navbar-brand" activeClassName="active" to="/" style={{color:"#FD93B0"}}>Notes-App</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {loggedIn===true&&(<>  <li className="nav-item">
          <NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/add">Add notes</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName="active" to="/about">About us</NavLink>
        </li>
        </>)
      }   

      {/* {
        loggedIn===false&& (<h4 className=" fst-italic ms-5 ps-5 fw-bold" style={{color:"#EF6F6C"}}>Unauthorized !!</h4>)
      } */}
      </ul>
      
      <div className="user">
      {
        loggedIn===false?(<>
          <NavLink exact className="btn text-light m-1" to="/signup">Signup</NavLink>
      <NavLink exact className="btn btn-light m-1 px-5" to="/login">login</NavLink>
        </>):<Logout/>  }
      
     
       
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
