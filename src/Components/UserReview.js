import React from "react";
import DeleteComment from "./DeleteComment";

function UserReview({review}){
  console.log(review)

  function onReviewDelete(){

  }

  return(
    <div>
      <div className="user-review">
        <p><b>Rating:</b>  {review.rating.toString()}</p>
        <p><b>Comment:</b></p>
        <p>{review.comment}</p>
        <DeleteComment onReviewDelete={onReviewDelete} id={review.id}/>
      </div>
    </div>
  )
}

export default UserReview