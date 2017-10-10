import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { auth } from '../base';
import { storageKey } from '../base';
import { isAuthenticated } from '../base';

import Landing from './Landing';
import User from './User';
import Login from './Login';
// import Content from './Content';

class App extends Component {
  state = {
    uid: null
  };

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({ uid: user.uid });
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({ uid: null });
      }
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />
          <MatchWhenAuthorized path="/project" component={User} />
        </div>
      </BrowserRouter>
    );
  }
}

const MatchWhenAuthorized = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={renderProps =>
      isAuthenticated() ? (
        <Component {...renderProps} />
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: renderProps.location }
          }}
        />
      )}
  />
);

export default App;

MatchWhenAuthorized.propTypes = {
  component: PropTypes.any,
  location: PropTypes.any
};

// const FourOhFour = () => <h1>404</h1>;
{
  /* <Route component={FourOhFour} /> */
}
{
  /* <Route path="/project/:pageID" component={Content} /> */
}
