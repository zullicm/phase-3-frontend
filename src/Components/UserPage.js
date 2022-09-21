import React, { useEffect, useState } from "react";

function UserPage({userId}){
  const [user, setUser] = useState([])
  useEffect(() => {
    fetch(`http://localhost:9292/userreviews/${userId}`)
    .then(res => res.json())
    .then(data => userSetter(data))
  }, [])

  function userSetter(data){
    setUser(data)
  }

  return(
    <div>
      <h1>{user.name}'s User Page</h1>
      <h4>Reviews</h4>
      
    </div>
  )
}

export default UserPage