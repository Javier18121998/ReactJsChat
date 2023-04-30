import logo from './logo.svg';
import './App.css';
import Principal from './Components/Principal';
import Secondary from './Components/Secondary';
import Navigator from './Components/TagComponents/Navigator';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleInputChange = (value) => {
    setData(value);
  };
  return (
    <div className="App">
      <Router>
        <Navigator/>
        <div>
          <Routes>
            <Route path='/Principal' element={<Principal onInputChange={handleInputChange} />} />
            <Route path='/Secondary' element={<Secondary data={data} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
