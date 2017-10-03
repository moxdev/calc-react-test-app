# Use node path instead of '../Something.js
- in the package.json
`"start": "NODE_PATH=src react-scripts start"`

# Create React Commands

`yarn start`
- Starts the development serve

`yarn build`
- Bundles the app into static files for productio

`yarn test`
- Starts the test runne

`yarn eject`
- Removes this tool and copies build dependencies, configuration files
and scripts into the app directory. If you do this, you can’t go back!

# Debug
## Regular Dev Tools
- `$0`
  - shows props in regular javacript

## React Dev Tools (console)
- `$r`
  - shows the component
- `$r.props` 
  - shows the props of the component
- `$r.props.specificprop` 
  - shows the specific prop of the component

# PropTypes Verification

- for functions
- [Read](https://github.com/yannickcr/eslint-plugin-react/issues/134)
```jsx
Create.propTypes = {
  addItem: PropTypes.func.isRequired
};
```

# Stateless Functions
[Stateless Function Docs](https://reactjs.org/docs/context.html#referencing-context-in-stateless-functional-components)
- no need to use the ES6 class for outputting stateless functions

```jsx
const YourComponentName = (props) => {
  return (
    ...Html goes here
    if passing props use {props.yourprop}
  )
}
```

# Browser Router
- [Read this for BRv4](https://stackoverflow.com/questions/42123261/programmatically-navigate-using-react-router-v4)
- react-router required `yarn add react-router --dev`
- add `import { BrowserRouter, Route, Switch } from 'react-router-dom';`

```jsx
const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Component1} />
        <Route path="/yourpath" component={Component2} />
        <Route path="/yourpath" component={Component3} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);
```

## Router Context
- makes the router availale to children
- requires `import PropTypes from 'prop-types';`
- bind this to function on component - `this.context.router.transitionTo(/your route);`

```jsx
YourComponent.contextTypes = {
  router: PropTypes.object
};
```

# Refs

[React Docs Ref](https://reactjs.org/docs/refs-and-the-dom.html)

- refernces to DOM elements

`<input type="text" ref={(input) => { textInput = input; }} />`