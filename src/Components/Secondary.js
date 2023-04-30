import React, { useState, useEffect } from "react";

export default function Secondary() {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  useEffect(() => {
    const datos = JSON.parse(localStorage.getItem("datos")) || [];
    setData(datos);
  }, []);

  const handleClick = () => {
    setShowData(true);
  };

  const handleClearData = () => {
    localStorage.removeItem("datos");
    setData([]);
  };

  return (
    <div>
      <button onClick={handleClick}>Mostrar datos</button>
      {showData && data.map((dato, index) => <p key={index}>{dato}</p>)}
      {showData && data.length === 1 && (<button onClick={handleClearData}>Eliminar Elemento</button>)}
      {showData && data.length > 1 && (<button onClick={handleClearData}>Eliminar Elementos</button>)}
    </div>
  );
}