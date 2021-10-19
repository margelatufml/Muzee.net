import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';
import { createMessage } from '../../actions/messages';
import '../leads/style.css';

export class Register extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.register(newUser);
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="test">
      <div className="strategic_box"></div>
      <div className="strategic_box1"></div>
      <div className="col-md-6 m-auto " >
        <div className="bootstrapedecacat" id="an">
          <h2 className="textdecacat" id="as">REGISTER</h2>
          <form onSubmit={this.onSubmit}>
            
            <div className="formt">
              <label>Username</label>
              <input
                type="text"
                className="form1"
                name="username"
                id="au"
                onChange={this.onChange}
                value={username}
              />
            </div>
            <div className="formt">
              <label>Email</label>
              <input
                type="email"
                className="form1"
                id="ae"
                name="email"
                onChange={this.onChange}
                value={email}
              />
            </div>
            <div className="formt">
              <label>Password</label>
              <input
                type="password"
                className="form1"
                id="ap"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>
            <div className="formt">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form1"
                id="acp"
                name="password2"
                onChange={this.onChange}
                value={password2}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-outline-secondary rounded">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Rampart+One&display=swap');
</style>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital@1&display=swap');
</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
