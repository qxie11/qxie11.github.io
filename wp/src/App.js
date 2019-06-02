import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from "./About";


class App extends React.Component {

    render() {
        return (
           <Fragment>
      <BrowserRouter>
        <Fragment>
          <Switch>
            
          <Route path="/aut" component={About} />
          </Switch>
        </Fragment>
      </BrowserRouter>
      </Fragment>
        )
    }
}

export default App;