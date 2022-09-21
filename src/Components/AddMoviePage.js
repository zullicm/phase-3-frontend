import React, { useState } from "react";

function AddMoviePage(){
  const [name, setName] = useState("")
  const [image, setImage] = useState("")


  function handleName(e){
    setName(e.target.value)
  }
  function handleImage(e){
    setImage(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()

    const newMovie = {
      "name" : name,
      "image" : image
    }

    fetch(`http://localhost:9292/addmovie`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie)
    })
     .then(res => res.json())
     .then(data => console.log(data))

     setName("")
     setImage("")
  }

  return(
    <>
      <h4>
        Add a Movie with the form below
      </h4>
      <div className="movie-form">
        <form>
          <input type="text" name="name" placeholder=" Movie Name" onChange={handleName}
           value={name}></input>
          <input type="text" name="comment" placeholder=" Movie Image Url" onChange={handleImage} value={image}></input>
          <a onClick={handleSubmit} className="waves-effect waves-light btn">Add Movie</a>
        </form>
      </div>
    </>
  )
}

export default AddMoviePage