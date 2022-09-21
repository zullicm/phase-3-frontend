import React, { useState } from "react";

import ReviewEditing from "./ReviewEditing";
import ReviewNotEditing from "./ReviewNotEditing";

function UserReview({review}){
  const [edit, setEdit] = useState(false)
  const [rating, setRating] = useState("")
  const [comment, setComment] = useState("")

  function rateChange(e){
    setRating(e.target.value)
  }
  function commentChange(e){
    setComment(e.target.value)
  }

  function changeEdit(){
    setEdit(true)
  }

function sendEdit(){

  const changedReview = {
    "rating" : rating,
    "comment" : comment
  }

  fetch(`url/${review.id}`,{
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
      {edit ? <ReviewEditing commentChange={commentChange}rateChange={rateChange}sendEdit={sendEdit} review={review}/> : <ReviewNotEditing changeEdit={changeEdit}review={review}/>}
      </div>
    </div>
  )
}

export default UserReview