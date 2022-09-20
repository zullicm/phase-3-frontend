import React from "react";

function Review({review}){
console.log(review)
  return (
    <div className="review">
      <p>{review.rate}</p>
      <p>{review.comment}</p>
    </div>
  )
}

export default Review