import React from "react";
import "./Modal.css";
import App from "../App";
function Modal({ setOpenModal, color }) {
  const colors = {
    "red":"rojo",
    "blue":"azul"

  }

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>Señor usuario el color de la pantalla ha cambiado a {colors [color]}</h1> 
            
        </div>
        
        
      </div>
    </div>
  );
}

export default Modal;
