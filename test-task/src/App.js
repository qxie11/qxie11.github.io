import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./components/About";
import Nav from './components/Nav';
import Home  from './components/Main/Home';
import Auth from './components/Auth';

class App extends React.Component {

    render() {
        return (
      <BrowserRouter>
        <Nav />
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/authorization/" component={Auth} />
      </BrowserRouter>
        )
    }
}

export default App;