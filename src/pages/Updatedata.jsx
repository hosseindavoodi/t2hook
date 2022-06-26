import React, { useState } from "react";
import axios from "axios";

import './../App.css'

export default function Updatedata (props) {


  const [user, setUser] = useState({ name: props.name, email: props.email, body: props.body});

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };


  const handleUpdate = e => {
    e.stopPropagation()

    axios
      .put("http://localhost:3000/posts/" + props.id, user)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <>
        
<form className="form1" onSubmit={handleUpdate}>
    <div className="form-group">
    <label>New User name</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  name="name" value={user.name} onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email}  onChange={handleChange} />
  </div>
  <div className="form-group">
    <label>Body text</label>
    <input type="text" className="form-control" id="exampleInputPassword1"  name="body" value={user.body} onChange={handleChange} />
  </div>
 
  <button type="submit" className="btn btn-primary form-group">Submit</button>
</form>
      
  </>
  )
}
