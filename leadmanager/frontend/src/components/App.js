import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import Header from './layout/Header';
import Dashboard from './leads/Dashboard';
import Alerts from './layout/Alerts';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
import { MainPage } from './leads/MainPage';

import { Provider } from 'react-redux';
import store from '../store';
import { loadUser } from '../actions/auth';
import { MainPageTxt } from './leads/Main PageText';


// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};
const as={
padding:'100px',
margin_top:'5000px',
color:'white',
background_color:'white',
font_text:'14px',

}

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  };

  render() {
    return (
      <Provider store={store} >
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <Fragment >
              <Header />
              <Alerts />
              <PrivateRoute exact path="/" component={MainPage}/>
              <div className="container">
                <Switch>
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
