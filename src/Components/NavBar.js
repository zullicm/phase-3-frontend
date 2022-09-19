import React from "react";
import { NavLink } from "react-router-dom"

function NavBar(){
  return(
    <div className="navbar-fixed">
    <nav>
      <div className="orange lighten-2 nav-wrapper">
          <NavLink id="nav-logo" exact to="/">Movie Reviews</NavLink>
          <ul className="right hide-on-med-and-down">
          <li><NavLink className="black-text" exact to="/movielist">Movies</NavLink></li>
        </ul>
      </div>
    </nav>
    </div>
  )
}

export default NavBar