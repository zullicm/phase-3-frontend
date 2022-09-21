import React, {useState, useEffect} from "react";
import DeleteMovie from "./DeleteMovie";
import Review from "./Review";

function MovieCard({ movie, handleMovieDelete }){
  const {name, image, id} = movie
  const [reviews, setReviews] = useState([])
  const [userName, setUserName] = useState("")
  const [comment, setComment] = useState("")
  const [rate, setRate] = useState("")
  const [movieRate, setMovieRate] = useState("")
  

  useEffect(() => {
    fetch(`http://localhost:9292/reviews/${movie.id}`)
    .then(res => res.json())
    .then(data => reviewSetter(data))

    fetch(`http://localhost:9292/reviewavg/${movie.id}`)
    .then(res => res.json())
    .then(data => movieRateSetter(data))

  }, [])

  function reviewSetter(data){
    setReviews(data)
  }

  function movieRateSetter(data){
    setMovieRate(data)
  }

  function handleSubmit(e){
    e.preventDefault()
    fetch(`http://localhost:9292/user/${userName}`)
    .then(res => res.json())
    .then(data => nameCheck(data))
  }

  function nameCheck(data){
    if(data){
      submitReview(data)
    }else{
      const newUser = {
        "name" : userName
      }
      fetch(`http://localhost:9292/newuser`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser)
      })
    .then(res => res.json())
    .then(data => submitReview(data))
    }
  }

  function submitReview(userData){
    const userID = userData.id

    const review = {
      "comment" : comment,
      "rating" : parseInt(rate),
      "user_id" : userID,
      "movie_id" : id
    }

    fetch(`http://localhost:9292/newreview`,{
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review)
      })
    .then(res => res.json())
    .then(data => reviewSetter([...reviews, data]))

      setUserName("")
      setComment("")
      setRate("")

    }


  function handleName(e){
    setUserName(e.target.value)
  }

  function handleComment(e){
    setComment(e.target.value)
  }

  function handleRate(e){
    const realRate = parseInt(e.target.value)
    if(realRate > 10){
      setRate("10")
    }else if(realRate < 1){
      setRate("1")
    }else{setRate(e.target.value)}
  }

  function onReviewDelete(id){
    const newList = reviews.filter(review => review.id !== id)
    reviewSetter(newList)
  }

  return(
    <div className="movie-card">
      <div className="ticket-left">
      <div className="movie-info">
        <h5 className="movie-name">{movie.name} : {Math.round(movieRate)} </h5>
        <img className="movie-image" src={image} />
      </div>
      <div className="movie-input">
        <form>
          <input type="text" name="name" placeholder=" Your Name" onChange={handleName}
           value={userName}></input>
          <input type="text" name="comment" placeholder=" Your Witty Comment" onChange={handleComment} value={comment}></input>
          <input type="text" name="rating" placeholder=" Rate 1-10" onChange={handleRate}
           value={rate}></input>
          <a onClick={handleSubmit} className="waves-effect waves-light btn">Leave Comment</a>
        </form>
      </div>
      <DeleteMovie handleMovieDelete={handleMovieDelete}movieId={id}/>
      </div>
      <div className="reviews">
        {reviews.map(review => <Review key={review.id} onReviewDelete={onReviewDelete} review={review}/>)}
      </div>
        
    </div>
  )
}

export default MovieCard