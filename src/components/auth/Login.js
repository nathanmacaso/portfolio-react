import React, { Component } from 'react'
import axios from 'axios';
import './login.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state ={
      email: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = () => {
    const { email, password } = this.state;
    axios.post("http://localhost:3001/sessions", 
              { user: { email: email, password: password } }, 
              { withCredentials: true })
          .then(response => console.log(response))
          .catch(error => console.log(error));
    event.preventDefault();
  }

  render() {
    console.log(this.state);
    return (
      <div className="container login">
        <form onSubmit={this.handleSubmit}>
          <h2>Admin Login</h2>
          <div className="input-container">  
            <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} required></input>
          </div>
          <div className="input-container">  
            <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required></input>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
