import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Nav from './components/Nav';
import Home from './components/Home';
import Auth from './components/Auth';

class App extends React.Component {

    render() {
        return (
          <Fragment>
      <BrowserRouter>
        <Fragment>
        <Nav />
          <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/about" component={About} />
          <Route path="/authorization" component={Auth} />
          </Switch>
        </Fragment>
      </BrowserRouter>
      </Fragment>
        )
    }
}

export default App;