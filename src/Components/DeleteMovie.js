import React from "react";

function DeleteMovie({ movieId, handleMovieDelete }){

  function handleDelete(){
    fetch(`http://localhost:9292/deletemovie/${movieId}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => handleMovieDelete(movieId))
  }

  return(
    <div>
      <a onClick={handleDelete} className="btn delete-movie">Delete Movie</a>
    </div>
  )
}

export default DeleteMovie