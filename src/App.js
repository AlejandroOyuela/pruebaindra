import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [color, setColor] = useState("black");
  const [text] = useState(color);
  const mystyle = {
    fontSize: 30,
    color: color,
    marginTop: 50
  };
  
  return (
    <div className="App">
      <h1 style={mystyle}>Prueba Básica</h1>
      <div className="Button">
      <button
        className="openModalBtn"
        onClick={() => {
          setColor("red")
          setModalOpen(true);
        }}
        style={{backgroundColor:"red" }}
      >
        
      </button>
        <button
        className="openModalBtn"
        onClick={() => {
          setColor("blue")

          setModalOpen(true);
        }}
        style={{backgroundColor:"Blue"}}
      >
        
      </button>
      </div>
      {modalOpen && <Modal setOpenModal={setModalOpen} color={color} />}
    </div>
  );
}

export default App;
