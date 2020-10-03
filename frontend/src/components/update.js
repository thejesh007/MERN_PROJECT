import React from "react";
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router-dom';
import swal from 'sweetalert';


import axios from "axios";


class Update extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {},
      errors: {}
    };
    this.baseState = this.state

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let input = this.state.input;
    input[event.target.name] = event.target.value;

    this.setState({
      input
    });
  }

  handleReset = (event => {
    event.preventDefault();
    let input = {};
    input["firstName"] = "";
    input["middleName"] = "";
    input["lastName"] = "";
    input["email"] = "";
    input["mobileNo"] = "";
    input["address"] = "";
  
    input["message"] = "";

    this.setState(this.baseState)

    this.setState({ input: input });
  })

  handleSubmit = (event, history) => {
    event.preventDefault();

    if (this.validate()) {
      console.log(this.state);

      //reset after registration!
      /* let input = {};
       input["firstName"] = "";
       input["middleName"] = "";
       input["lastName"] = "";
       input["email"] = "";
       input["mobileNo"] = "";
       input["address"] = "";
       input["userId"] = "";
       input["password"] = "";
       input["message"]="";
       
       this.setState({input:input});*/

      console.log(this.state.input)  
      alert('successfully update');

      // post data in database
      axios
        .put("http://localhost:4444/api/user/update", this.state.input)
        .then(res => {
          console.log(res);
        })
        .catch(error => {
          console.log(error);
        });

      if (history) {
        history.push("/Login");
      }

    }
  }

  validate() {
    let input = this.state.input;
    let errors = {};
    let isValid = true;

    //required fields
    if ((!input["firstName"]) || (!input["lastName"]) || (!input["email"]) || (!input["mobileNo"]) ||
      (!input["address"]) ) {
      isValid = false;
      errors["message"] = "All * mentioned fields are mandatory.";
    }

    else {
      //username validation
      

      //mobile no. validation
      if (typeof input["mobileNo"] !== "undefined") {

        var pattern = new RegExp(/^[0-9\b]+$/);

        if (!pattern.test(input["mobileNo"])) {

          isValid = false;

          errors["mobileNo"] = "Please enter only number.";

        } else if (input["mobileNo"].length != 10) {

          isValid = false;

          errors["mobileNo"] = "Please enter valid phone number.";

        }

      }

      //email validation
      if (typeof input["email"] !== "undefined") {

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
    }
    this.setState({
      errors: errors
    });

    return isValid;


  }



  render() {
    return (
      <React.Fragment>
        <div className="container">
          <form className="registerForm" onSubmit={this.handleSubmit}>

            <br></br>
            <div className="form-group" style={{ display: "flex" }} >
              <label className="control-label col-sm-2 "> *FirstName:</label>
              <div className="col-sm-11">
                <input
                  type="text" style={{ height: '90%', width: '40%' }} className="form-control input-sm"
                  name="firstName"
                  maxLength="25"
                  onChange={this.handleChange} value={this.state.input.firstName}
                  required
                />
              </div>
            </div>

            <div className="form-group " style={{ display: "flex" }}>
              <label className="control-label col-sm-2 ">MiddleName:</label>
              <div className="col-sm-11">
                <input type="text" style={{ height: '90%', width: '40%' }}
                  className="form-control input-sm"
                  name="middleName"
                  onChange={this.handleChange} value={this.state.input.middleName}
                />
              </div>
            </div>

            <div className="form-group" style={{ display: "flex" }}>
              <label className="control-label col-sm-2 ">*LastName:</label>
              <div className="col-sm-11">
                <input type="text" style={{ height: '90%', width: '40%' }}
                  className="form-control input-sm"
                  name="lastName"
                  maxLength="25" onChange={this.handleChange} value={this.state.input.lastName} required
                />
              </div>
            </div>

            <div className="form-group " style={{ display: "flex" }}>
              <label className="control-label col-sm-2 ">*Email:</label>
              <div className="col-sm-11">
                <input type="text" style={{ height: '90%', width: '40%' }}
                  className="form-control input-sm"
                  name="email"
                  onChange={this.handleChange} value={this.state.input.email} required
                />
                <div className="text-danger">{this.state.errors.email}</div>
              </div>
            </div>

            <div className="form-group " style={{ display: "flex" }}>
              <label className="control-label col-sm-2 ">*Mobile#:</label>
              <div className="col-sm-11">
                <input type="text" style={{ height: '90%', width: '40%' }}
                  className="form-control input-sm"
                  name="mobileNo"
                  onChange={this.handleChange} value={this.state.input.mobileNo} required
                />
                <div className="text-danger">{this.state.errors.mobileNo}</div>
              </div>
            </div>


            <div className="form-group " style={{ display: "flex" }}>
              <label className="control-label col-sm-2 ">*Address:</label>
              <div className="col-sm-11">
                <input type="text" style={{ height: '90%', width: '40%' }}
                  className="form-control input-sm"
                  name="address"
                  maxLength="50"
                  onChange={this.handleChange} value={this.state.input.address} required
                />
              </div>
            </div>

          <div className="form-group" style={{ display: "flex" }}>
              <label className="control-label col-sm-2"></label>
              <div className="col-sm-offset-2 col-sm-11">
                <div className="text-danger">{this.state.errors.message}</div><br></br>
                <Route render={({ history }) => (
                  <button type="submit" className="btn btn-primary mr-2" onClick={(e) => this.handleSubmit(e, history)}>Update</button>
                )} />

                <button type="reset" className="btn btn-primary" onClick={this.handleReset}>Reset</button>
              </div>
            </div>
          </form>
        </div>
      </React.Fragment>
    )
  }

}
export default Update;

