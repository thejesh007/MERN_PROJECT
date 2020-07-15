import React from 'react';
import Register from "./Register";
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';


function App() {
  return (
    <>
 
 
      <Router>
      <nav className="navbar navbar-expand-sm bg-info text-white navbar-dark ">
  <a className="navbar-brand" href="#">TravelClaimsAZ</a>
  </nav>
  <div className="container-fluid" style={{marginTop:"40px"}}></div>
  <div className="text-center">
  <Link to="/Login">
    <button className="mr-2 btn btn-info">Login</button>
    </Link>
    <Link to="/Register">
    <button className="btn btn-info">Register</button>
    </Link>

  </div>
          <Switch>
        <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/" component={Login}/>       
        </Switch>
    
      </Router>
      </>
  );
 
}

export default App;
