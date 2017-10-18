import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './css/styles.css';
import registerServiceWorker from './registerServiceWorker';

import App from './components/App';
import Login from './components/Login';
import EditProfile from './components/EditProfile';

const FourOhFour = () => <h1>404</h1>;

const Root = () => {
  return (
    <MuiThemeProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/dashboard" component={App} />
            <Route path="/edit/:id" component={EditProfile} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();

{
  /* <Route component={FourOhFour} /> */
}
{
  /* <Route path="/project/:pageID" component={Content} /> */
}
