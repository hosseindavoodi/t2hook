import React from "react";

const CardInfo = (props) => {
  console.log(props)
  return (
    <div>
      <div className="divimg"></div>
      <p><b>ID: </b> {props.location.state.id} </p>
      <p><b>NAME: </b>{props.location.state.name} </p>
      <p><b>EMAIL: </b>{props.location.state.email} </p>
      <p><b></b>{props.location.state.body} </p>
    </div>
  );
};

export default CardInfo;