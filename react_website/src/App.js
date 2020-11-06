import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Service from './components/Pages/Service';
import PortFolio from './components/Pages/PortFolio';
import TEAM from './components/Pages/TEAM';

class App extends Component {
  render() {
    return (
      <Router>
        <PageWrapper>  

          <Route
            exact={true}
            path="/"
            component={Home}
          />

          <Route
            path="/services"
            component={Service}
          />

          <Route
            path="/portfolio"
            component={PortFolio}
          />

          <Route
            path="/about"
            component={About}
          />

          <Route
            path="/team"
            component={TEAM}
          />

          <Route
            path="/Contact"
            component={Contact}
          />

        </PageWrapper>
      </Router>
    );
  }
}

export default App;
