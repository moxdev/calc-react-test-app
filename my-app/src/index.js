import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/styles.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Login from './components/Login';
import User from './components/User';

const Root = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={App} />
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

// const FourOhFour = () => <h1>404</h1>;
{
  /* <Route component={FourOhFour} /> */
}
{
  /* <Route path="/project/:pageID" component={Content} /> */
}
