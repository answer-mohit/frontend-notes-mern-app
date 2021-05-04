import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
// import reducer from './reducer';

const AppContext=React.createContext();




const AppProvider=({children})=>{
const [loggedIn,setLoggedIn]=useState(false);


const getloggedIn=async()=>{
        const result=await axios.get("/auth/loggedin");
        setLoggedIn(result.data);    
}





useEffect(()=>{
getloggedIn();
},[]);




return(<AppContext.Provider
 value={{loggedIn,getloggedIn}}>
 {children}
 </AppContext.Provider>)
}

export {AppContext,AppProvider}