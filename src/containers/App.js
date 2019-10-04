import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import LogIn from '../components/LogIn';
import Registration from '../components/Registration';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => <div></div>;

class App extends Component {

  render() {

    return (
      <Router>
        <div className="padding-top-medium">
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/logIn" component={LogIn}/>
            <Route path="/registration" component={Registration}/>
          </Switch>
        </div>
      </Router>
      
    )
  }
}

export default App;
