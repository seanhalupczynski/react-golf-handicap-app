import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import GolfCourse from './pages/GolfCourse';
import PlayerProfile from './pages/PlayerProfile';
import Header from './components/Header';
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact path = '/'
          component = { Welcome } />
        <Route
          exact path = '/golfcourse'
          component = { GolfCourse } />
        <Route
          exact path = '/playerprofile'
          component = { PlayerProfile } />
      </Switch>
    </Router>
  );
}

export default () => {

  return(
    <div>
      <Header></Header>
      <App></App>
      <Footer></Footer>
    </div>
  )

};
