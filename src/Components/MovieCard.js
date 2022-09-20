import React, {useState, useEffect} from "react";
import Review from "./Review";

function MovieCard({ movie }){
  const {name, image, id} = movie
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState("")
  const [comment, setComment] = useState("")
  
  function reviewSetter(data){
    setReviews([...reviews, data])
  }

  useEffect(() => {
    fetch(`http://localhost:9292//reviews/${movie.id}`)
    .then(res => res.json())
    .then(data => reviewSetter(data))
  }, [])

  function handleSubmit(e){

  }

  function handleName(e){
    setUserName(e.target.value)
  }

  function handleComment(e){
    setComment(e.target.value)
  }


  return(
    <div className="movie-card">
      <div className="reviews">
        {reviews.map(review => <Review />)}
      </div>
      <div className="ticket-left">
      <div className="movie-info">
        <img className="movie-image" src={image} />
      </div>
      <div className="movie-input">
        <form>
          <input type="text" name="name" placeholder=" Your Name" onChange={handleName}
           value={userName}></input>
          <input type="text" name="comment" placeholder=" Your Witty Comment" onChange={handleComment} value={comment}></input>
          <a onClick={handleSubmit} class="waves-effect waves-light btn">Leave Comment</a>
        </form>
      </div>
      </div>

    </div>
  )
}

export default MovieCard