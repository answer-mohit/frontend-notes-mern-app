import React, { useContext } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppContext } from '../context';
import About from './About';
import Addnote from './Addnote';
import Edit from './Edit';
import Error from './Error';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
function Router() {
    const {loggedIn}=useContext(AppContext);
    return (
        <>
        <Switch>
            
        

        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/> 

        {/* <Route exact path="/" component={Home}/> */}

            <Route exact path="/">
  {loggedIn===false ? <Redirect to="/login" /> :<Home/> }
</Route>






{/* <Route exact path="/">
  {loggedIn===false ? <Redirect to="/login" /> : <Home/>}
</Route> */}

            {/* <Route exact path="/" component={Home}/>  */}

             
    {
        loggedIn===true&&(<>
   <Route exact path="/about" component={About}/> 
        <Route exact path="/add" component={Addnote}/>
        <Route exact path="/edit/:id" component={Edit}/>
        </>)
    }    

<Route exact path="*" component={Error}/>    

             

        </Switch>
        </>
    )
}

export default Router
