import React from "react";

function DeleteComment({onReviewDelete, id}){

  function deleteReview(){
    fetch(`http://localhost:9292/deletereview/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onReviewDelete(id))
  }

  return(
    <>
    <i onClick={deleteReview} className="material-icons">delete_forever</i>
    </>
  )
}

export default DeleteComment