import React from 'react';
import Register from "./Register";
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';


function App() {
  return (
      <Router>
        <div>
        <div className="text-center">
       
            <Link to="/Login">
              <br></br>
              <button className="mr-3">Login</button>
    
                </Link>
              
          
            <Link to="/Register">
           
              <button>Register</button></Link>
            </div>
        <Switch>
        <Route path="/Login" component={Login}/>
          <Route path="/Register" component={Register}/>
          <Route path="/" component={Login}/>       
        </Switch>
      </div>
      </Router>
  
  );
}

export default App;
