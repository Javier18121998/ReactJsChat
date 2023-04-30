import React, { useState, useEffect } from "react";
const style = {
 primary:{
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)'
 },
 title:{
  color: '#fdfdfd',
 }
}

export default function Principal() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const savedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    setMessages(savedMessages);
  }, []);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessage = { from: "Primary", text: inputValue };
    localStorage.setItem("messages", JSON.stringify([...messages, newMessage]));
    setMessages([...messages, newMessage]);
    setInputValue("");
  };
  const handleClearMessages = () => {
    localStorage.removeItem("messages");
    setMessages([]);
  };
  return (
    <div style={style.primary}>
      <h3 style={style.title}>Primary</h3>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong className="fw-semibold">{message.from}:</strong> <h6 className="fw-normal text-warning">{message.text}</h6>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          <h5 className="fw-bolder text-info-emphasis">Ingresa un mensaje:</h5>
          <input className="form-control opacity-75" type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
      {messages.length > 0 && (
        <button className="btn btn-danger" onClick={handleClearMessages}>Eliminar todos los mensajes</button>
      )}
    </div>
  );
}