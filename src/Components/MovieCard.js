import React, {useState} from "react";

function MovieCard({ movie }){
  const {name, image} = movie



  return(
    <div className="movie-card">
      <div className="ticket-left">
      <div className="movie-info">
        <img className="movie-image" src={image} />
      </div>
      <div className="movie-input">
        <form>
          <input type="text" name="name" placeholder=" Your Name"></input>
          <input type="text" name="comment" placeholder=" Your Witty Comment"></input>
          <a class="waves-effect waves-light btn">Leave Comment</a>
        </form>
      </div>
      </div>
      
    </div>
  )
}

export default MovieCard