import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TeamDetails from './components/TeamDetails/TeamDetails';


function App() {
 
  return (
    <div>
      <Router>
        <Switch>
          <Route path exact = '/'>
            <Home></Home>
          </Route>
          <Route path= '/home'>
            <Home></Home>
          </Route>
          <Route path='/team/:idTeam'>
            <TeamDetails></TeamDetails>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
