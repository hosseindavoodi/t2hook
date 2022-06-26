
import React from "react";

export default function DeleteU(props) {
  const componentDelete = (id) => {
    fetch('http://localhost:3000/posts/' + id, { method: 'DELETE' })
    .then(response => console.log("Success", id, response));
  }


  return (
    <form className="form2" onSubmit={() => componentDelete(props.id)}>
    <button className="btn btn1 btn-primary" type="submit"  >Delete</button>
    </form>
  )
}

