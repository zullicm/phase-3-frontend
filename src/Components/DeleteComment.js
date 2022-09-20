import React from "react";

function DeleteComment({id}){

  function deleteReview(){
    fetch(`url/${id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(() => onItemDelete(id))
  }

  return(
    <>
    <i onClick={deleteReview} class="material-icons">delete_forever</i>
    </>
  )
}

export default DeleteComment