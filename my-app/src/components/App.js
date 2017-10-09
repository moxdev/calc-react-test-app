import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { auth } from '../base';
import { storageKey } from '../base';
import { isAuthenticated } from '../base';

import Login from './Login';
import Content from './Content';
import User from './User';

class App extends Component {
  state = {
    uid: null,
    user: null
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

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={User} />
            <Route path="/login" component={Login} />
            <Route component={FourOhFour} />
            <MatchWhenAuthorized path="/project" component={Content} />
            {/* <Route path="/project/:pageID" component={Content} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const FourOhFour = () => <h1>404</h1>;

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
  component: PropTypes.any
};
