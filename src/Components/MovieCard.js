import React, {useState, useEffect} from "react";
import Review from "./Review";

function MovieCard({ movie }){
  const {name, image} = movie

  const [reviews, setReviews] = useState([])
  
  function reviewSetter(data){
    setReviews([...reviews, data])
  }

  useEffect(() => {
    fetch(`http://localhost:9292//reviews/${movie.id}`)
    .then(res => res.json())
    .then(data => reviewSetter(data))
  }, [])

  return(
    <div className="movie-card">
      <div className="reviews">
        {reviews.map(review => <Review/>)}
      </div>
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