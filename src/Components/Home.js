import React,{ useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Home({getUserData}){
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:9292/movies")
    .then(res => res.json())
    .then(data => movieSetter(data))
  }, [])

  function movieSetter(data){
    setMovies(data)
  }

  function handleMovieDelete(id){
    const movieArray = movies.filter(movie => movie.id !== id)
    setMovies(movieArray)
  }

  return(
    <>
        {movies.map(movie => <MovieCard getUserData={getUserData}handleMovieDelete={handleMovieDelete}key={movie.id} movie={movie} /> )}
    </>
  )
}

export default Home

