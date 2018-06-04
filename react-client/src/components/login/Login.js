import React, { Component } from 'react';
import './Login.css';
import { inject, observer } from 'mobx-react';

@inject('AuthStore')
@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify(this.state));
    this.props.AuthStore.login(this.state);
  }
  render() {
    return (
      <div className="form-style-6">
        <h1>My Company</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="email"
            placeholder="Your Name"
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <p>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </p>

          <input type="submit" value="Log in" />
          <p>
            <br />
            Forgot your password? <a href="">Contact us</a>
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
