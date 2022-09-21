
import React, {useState, useEffect} from "react";
import DeleteComment from "./DeleteComment";
import { NavLink } from "react-router-dom"

function Review({review, onReviewDelete, getUserData}){

  const [user, setUser] = useState("")

  useEffect(() => {
    fetch(`http://localhost:9292/userbyid/${review.user_id}`)
    .then(res => res.json())
    .then(data => setterUser(data))
  }, [])

  function setterUser(data){
    setUser(data.name)
  }

  return (
    <div className="review">
      <NavLink onClick={() => getUserData(review.user_id)} className="user-link" exact to="/userpage"><u>Go to Users's Page</u></NavLink>
      <p><b>User:</b>  <em>{review.user ? review.user.name : user}</em>  <b>Rating:</b>  {review.rating.toString()}</p>
      <p><b>Comment:</b></p>
      <p>{review.comment}</p>
      <DeleteComment onReviewDelete={onReviewDelete} id={review.id}/>
    </div>
  )
}

export default Review