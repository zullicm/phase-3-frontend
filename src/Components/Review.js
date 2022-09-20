
import React, {useState, useEffect} from "react";
import DeleteComment from "./DeleteComment";

function Review({review}){

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
      <p><b>User:</b>  <em>{review.user ? review.user.name : user}</em>  <b>Rating:</b>  {review.rating.toString()}</p>
      <p><b>Comment:</b></p>
      <p>{review.comment}</p>
      <DeleteComment id={review.id}/>
    </div>
  )
}

export default Review