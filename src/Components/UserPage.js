import React, { useEffect, useState } from "react";
import UserReview from "./UserReview";

function UserPage({userId}){
  const [user, setUser] = useState([])
  const [reviews, setReviews] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/userreviews/${userId}`)
    .then(res => res.json())
    .then(data => userSetter(data))
  }, [])

  function userSetter(data){
    setUser(data)
    setReviews(data.reviews)
  }

  return(
    <div>
      <h1>{user.name}'s User Page</h1>
      <h4>Reviews</h4>
      {reviews.map(review => <UserReview review={review}/>)}
    </div>
  )
}

export default UserPage