import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
  return(
    <div className="navbar-fixed">
    <nav>
      <div className="teal lighten-3 nav-wrapper">
          <NavLink id="nav-logo" exact to="/">Flick Critique</NavLink>
          <ul className="right hide-on-med-and-down">
          <li><NavLink className="black-text" exact to="/addmoviepage">Don't see a movie? Add it HERE!</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar