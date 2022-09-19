import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
  return(
    <div className="navbar-fixed">
    <nav>
      <div className="teal lighten-3 nav-wrapper">
          <NavLink id="nav-logo" exact to="/">Movie Reviewer</NavLink>
          <ul className="right hide-on-med-and-down">
          <li><NavLink className="black-text" exact to="/movielist">Check out our list of movies HERE</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar