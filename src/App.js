import React from 'react';
import logo from './logo.svg';
import './App.css';

import One from './One';
import Two from './Two';
import Three from './Three';

import {
  Link,
  Route
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link to="/one" className="nav-link">One</Link>
          </li>
          <li className="nav-item">
            <Link to="/two" className="nav-link">Two</Link>
          </li>
          <li className="nav-item">
            <Link to="/three" className="nav-link">Three</Link>
          </li>
        </ul>
        <Route path='/one' component={One} />
        <Route path='/two' component={Two} />
        <Route path='/three' component={Three} />
      </div>
    );
  }
}

export default App;
