import React, { useState } from "react";

import ReviewEditing from "./ReviewEditing";
import ReviewNotEditing from "./ReviewNotEditing";

function UserReview({onReviewDelete, review}){
  const [edit, setEdit] = useState(false)
  const [rating, setRating] = useState(review.rating)
  const [comment, setComment] = useState(review.comment)

  function rateChange(e){
    setRating(e.target.value)
  }
  function commentChange(e){
    setComment(e.target.value)
  }

  function changeEdit(){
    setEdit(true)
  }

function sendEdit(e){
  e.preventDefault()
  const changedReview = {
    "rating" : rating,
    "comment" : comment
  }

  fetch(`http://localhost:9292/reviewpatch/${review.id}`,{
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(changedReview)
  })
  .then(res => res.json())
  .then(data => console.log(data))
  setEdit(false)
}

  return(
    <div>
      <div className="review-editor">
      {edit ? <ReviewEditing commentChange={commentChange}rateChange={rateChange}sendEdit={sendEdit} review={review}/> : <ReviewNotEditing onReviewDelete={onReviewDelete}comment={comment}rating={rating}changeEdit={changeEdit}review={review}/>}
      </div>
    </div>
  )
}

export default UserReview