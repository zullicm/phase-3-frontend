import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AddMoviePage from './Components/AddMoviePage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/addmoviepage">
          <AddMoviePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;


// reviewpage