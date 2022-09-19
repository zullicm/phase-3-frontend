import React,{ useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home(){
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then(res => res.json())
    .then(data => setMovies(data))
  }, [])


  return(
    <>
      <h1>
        Home
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} /> )}
      </h1>
    </>
  )
}

export default Home

// http://localhost:9292/movies