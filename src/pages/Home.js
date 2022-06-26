import React, { useState, useEffect } from "react";
import {Users} from "./Users";
import {
  Link
} from "react-router-dom";
import DeleteU from "./DeleteU";

import './../App.css'

export default function App() {
  const [posts, setPosts] = useState([]);
  
  const fetchPost = async () => {
  const response = await fetch(
      "http://localhost:3000/posts"
    );
   const data = await response.json();
    setPosts(data);
    console.log(data)
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <div className="App">
      <div style={{height: "40px"}}>
         <Users btnname={'add new user'} />
         </div>
    {posts.map(item => (
          <div key={item.id}>
          <span>id: {item.id}</span>
          <div  className="div1">{item.name} 
          <Link 
              to={{
                pathname: `/card/${item.id}`,
                state: {
                  email: item.email,
                  name: item.name,
                  id: item.id,
                  body: item.body

                }
              }}>
              <button className="btn btn1 btn-primary">Detail</button>
            </Link>
            <Users btnname={'Edit'} name={item.name} email={item.email} body={item.body} id={item.id} />
            <DeleteU id={item.id} />

          </div> 
          <br/>
          </div>
        ))}
     
    </div>
  );
}