import React, { Component } from 'react';
import Navbar from '../components/navbar/navbar.component';
import LogIn from '../pages/LogIn/LogIn.component';
import Registration from '../pages/Registration/Registration.component';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppContainer from './App.styles'

const Home = () => <div></div>;

class App extends Component {

  render() {

    return (
      <Router>
        <AppContainer>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/logIn" component={LogIn}/>
            <Route path="/registration" component={Registration}/>
          </Switch>
        </AppContainer>
      </Router>
      
    )
  }
}

export default App;
