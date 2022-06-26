import React, { useState } from "react";
import ReactModal from 'react-modal';
import NewUser from "./Newuser";
import Updatedata from "./Updatedata"

import './../App.css'




export function Users (props) {

  const [mod, setmod] = useState ({showModal: false})
  

  const handleOpenModal = () => {
    setmod({ showModal: true })
  }

  const handleCloseModal = () => {
    setmod({ showModal: false })
  }


  return (
    <>
    <button className="btn btn1 btn-danger" onClick={handleOpenModal}>{props.btnname}</button>
    <ReactModal 
       isOpen={mod.showModal}
       ariaHideApp={false}
    >
      <button className="btn btn1 btn-primary" onClick={handleCloseModal}>Close Modal</button>
      {
      props.btnname==='add new user' ?
      <NewUser />
      :
      <Updatedata name={props.name} email={props.email} body={props.body} id={props.id} />
      }
     
    </ReactModal>
  </>

  )
}

