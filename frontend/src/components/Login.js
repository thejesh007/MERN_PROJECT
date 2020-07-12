import React from "react";
import "./login.css";

import {BrowserRouter as Router,Route,Link,Redirect, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component{
    constructor(props){
        super();
        this.state={
                    username:"",
                    password:"",
                    message:"",
                     textStyle:""
                    }
            }
        
            handleChange = (e) => {
                this.setState({
                    [e.target.name]:e.target.value,
                message:''})
            }
        
            handleSubmit = (e) => {
                e.preventDefault();
              
              
                if(this.state.username ===''){
                  alert('you need to enter the username')
                } 
                if( this.state.password===''){
                  alert('you need to enter the password')
                  
                } 
             
                let reqBody = {
                    "username": this.state.username,
                    "password":this.state.password
                }
                fetch('http://localhost:4444/api/user/login', {
                    method: 'POST',
                    body: JSON.stringify(reqBody),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                  }).then(response => {
                    if (response.status >= 200 && response.status < 300) {
                        alert("login succesfully")
                        console.log(response);
                        window.location.reload();
                      } else {
                        this.setState({message:"incorrect username or password",
                        textStyle:"danger" })
                }
                  })
                }
            
            
        
            render(){
              return(

                    <>
                        <br/>
                       
                    <div className="container">      
                        <form style={{position:'relative',left:'50px'}} onSubmit={this.handleSubmit}>
        
                            <div className="form-group " style={{display:"flex"}}>
                                <label   className="control-label col-sm-2" >Username:  </label>
                                <div className="col-sm-11">
                                  <input type="text"  style={{height:'90%',width:'40%' }} 
                                  className="form-control input-sm"
                                  name="username" onChange={this.handleChange} required
                                  />
                                </div>
                            </div>
                            
                            <div className="form-group"  style={{display:"flex"}}>
                                <label  className="control-label col-sm-2 ">Password:  </label>
                                <div className="col-sm-11">
                                  <input type="password" style={{height:'90%', width:'40%'}} 
                                  className="form-control input-sm"
                                  name="password" onChange={this.handleChange} required
                                  />
                                </div>
                            </div>
                          
                      
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                  {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br/>
                                  <button type="submit" className="btn btn-primary mr-2" onClick={this.handleSubmit}>Submit</button>
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>  
                  </>
                    
                )
              }
        }
    
      
        export default Login;
        
