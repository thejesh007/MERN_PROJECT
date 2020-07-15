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
  <ul className="navbar-nav">
    <li className="nav-item">
    <Link to="/Login">

      <a className="nav-link" href="#">Login</a>
      </Link>
    </li>
    <li className="nav-item">
    <Link to="/Register">
      <a className="nav-link" href="#">Register</a>
      </Link>
    </li>
  </ul>
  </nav>
  <div className="container-fluid" style={{marginTop:"40px"}}></div>
       
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
