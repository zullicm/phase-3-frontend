import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import AddMoviePage from './Components/AddMoviePage';
import UserPage from './Components/UserPage';


function App() {
  const [userId, setUserId] = useState("")
  function getUserData(data){
    setUserId(data)
  }

  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home getUserData={getUserData}/>
        </Route>
        <Route exact path="/addmoviepage">
          <AddMoviePage />
        </Route>
        <Route exact path="/userpage">
          <UserPage userId={userId}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;


// reviewpage