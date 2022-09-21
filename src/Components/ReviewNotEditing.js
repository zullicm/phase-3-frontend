import React from "react";
import DeleteComment from "./DeleteComment";

function ReviewNotEditing({ comment, rating, changeEdit, review}){

  function onReviewDelete(){

  }
  return(
    <div className="user-review">
      <a onClick={changeEdit} className="edit-review waves-effect waves-light btn">Edit Review</a>
      <p><b>Rating:</b>  {rating}</p>
      <p><b>Comment:</b></p>
      <p>{comment}</p>
      <DeleteComment onReviewDelete={onReviewDelete} id={review.id}/>
  </div>
  )
}

export default ReviewNotEditing