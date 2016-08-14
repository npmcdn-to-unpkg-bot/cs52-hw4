import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import { Link } from 'react-router';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitChange = this.onSubmitChange.bind(this);
  }

  onUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  onSubmitChange(event) {
    const fields = {
      email: this.state.email,
      password: this.state.password,
    };
    event.preventDefault();
    this.props.signupUser(fields);
    console.log(fields);
  }

  render() {
    return (
      <div className="signin">
        <h>Sign Up: </h>
        <form>
          <input className="input" onChange={this.onUsernameChange} value={this.state.username} placeholder="username" />
          <input className="input" onChange={this.onEmailChange} value={this.state.email} placeholder="email" />
          <input className="input" onChange={this.onPasswordChange} value={this.state.password} placeholder="password" />
          <div className="Button">
            <span><button onClick={this.onSubmitChange}>Submit</button></span>
            <Link to="/"><button>Cancel</button></Link>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signupUser })(Signup);