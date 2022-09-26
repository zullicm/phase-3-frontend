import React from "react";
import DeleteComment from "./DeleteComment";

function ReviewNotEditing({ onReviewDelete, comment, rating, changeEdit, review}){

  return(
    <div className="user-review">
      <a onClick={changeEdit} className="edit-review waves-effect waves-light btn">Edit Review</a>
      <p><b><em>{review.movie.name}</em></b></p>
      <p><b>Rating:</b>  {rating}</p>
      <p><b>Comment:</b></p>
      <p>{comment}</p>
      <DeleteComment onReviewDelete={onReviewDelete} id={review.id}/>
  </div>
  )
}

export default ReviewNotEditing