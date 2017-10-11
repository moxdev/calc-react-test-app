import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Landing from './Landing';
import User from './User';
import Login from './Login';
// import Content from './Content';

class App extends Component {
  state = {
    uid: null
  };

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
            <Route path="/project" component={User} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;

// const FourOhFour = () => <h1>404</h1>;
{
  /* <Route component={FourOhFour} /> */
}
{
  /* <Route path="/project/:pageID" component={Content} /> */
}
