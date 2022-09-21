import React from "react";
import DeleteComment from "./DeleteComment";

function ReviewNotEditing({changeEdit, review}){

  function onReviewDelete(){

  }
  return(
    <div className="user-review">
      <a onClick={changeEdit} className="edit-review waves-effect waves-light btn">Edit Review</a>
      <p><b>Rating:</b>  {review.rating.toString()}</p>
      <p><b>Comment:</b></p>
      <p>{review.comment}</p>
      <DeleteComment onReviewDelete={onReviewDelete} id={review.id}/>
  </div>
  )
}

export default ReviewNotEditing