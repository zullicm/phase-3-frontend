import React, {useState, useEffect} from "react";

function MovieCard({ movie }){
  const {name, image} = movie
  const [reviews, setReviews] = useState([])

  console.log(movie)

  function reviewSetter(data){
    setReviews([...reviews, data])
  }

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${movie.id}`)
    .then(res => res.json())
    .then(data => reviewSetter(data))
  }, [])


  return(
    <div className="movie-card">
      <h3>{name}</h3>
      <img className="movie-image" src={image}/>
      {}
    </div>
  )
}

export default MovieCard