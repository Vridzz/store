import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import loginImg from "../../../assets/img/login.png";
import history from "../../../history.js";
import axios from 'axios';

const initialState = {
  email: "",
  password: "",
  userType: "",
  passwordError: "",
};

export class Login extends React.Component {
  constructor(props) {
    super(props);
  }
  
  state = initialState;
  handleChange = event => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  }; 

  handleSubmit = event => {

    let emailError="";
    let passwordError="";

    event.preventDefault();
    console.log("State: ",this.state);
    axios.post('http://localhost:4000/api/user/login', {email: this.state.email, password: this.state.password})
    .then(res => {
      console.log("Response: " ,res);
    })
    .catch(error => {
      console.log(error);
    });
   
    if(emailError || passwordError) {
      this.setState({emailError,passwordError});
    }
  }
  
    render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <div className="base-container">
          <div className="header">Welcome Back!</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} />
            </div>
            <div className="form">
              <div className="form-group">
                  <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                  <div style={{ fontSize: 12, color: "red" }}>{this.state.emailError}</div>
              </div>
              <div className="form-group">
                  <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                  <div style={{ fontSize: 12, color: "red" }}>{this.state.passwordError}</div>
              </div>
            </div>
          </div>
          <div className="footer">
          <Button
            className="submit-btn"
            color="info"
          >
            Login
          </Button><br/><br/>
          <p>New to SmartMed? <Link to="/register">Register</Link></p>
          </div>
        </div>
      </form>
    );
  }
}