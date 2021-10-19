import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import '../leads/style.css'

export class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="test">
      <div className="strategic_box"></div>
      <div className="strategic_box1"></div>
      <div className="col-md-6 m-auto " >
        <div className="bootstrapedecacat">
          <h2 className="textdecacat" >LOGIN</h2>
          <form onSubmit={this.onSubmit}>
            <div className="formt">
              <label>Username</label>
              <input
                type="text"
                className="form1"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="formt">
              <label>Password</label>
              <input
                type="password"
                className="form1"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-outline-secondary rounded">
                Login
              </button>
            </div>
            <p>
              Don't have an account? <Link to="/register" className="link1">Register</Link>
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

export default connect(mapStateToProps, { login })(Login);
