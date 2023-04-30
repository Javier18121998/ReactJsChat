import React, { useState } from "react";

export default function Principal({ onInputChange }) {
    const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("datos", JSON.stringify([...(JSON.parse(localStorage.getItem("datos")) || []), inputValue]));
    onInputChange(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <h5>Ingresa un dato:</h5>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </label>
        <button type="submit">Agregar</button>
    </form>
  );
}