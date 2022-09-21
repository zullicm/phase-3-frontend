import React from "react";

function ReviewEditing({commentChange, rateChange, sendEdit, review}){
  return(
    <div className="user-review">
    <form>
    <a onClick={sendEdit} className="edit-review waves-effect waves-light btn">Send Edit</a>
      <input onChange={rateChange} name="rating" defaultValue={review.rating}></input>
      <input onChange={commentChange} name="comment" defaultValue={review.comment}></input>
    </form>
  </div>
  )
}

export default ReviewEditing