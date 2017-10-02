import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Content from './Content';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/project/:pageID" component={Content} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
