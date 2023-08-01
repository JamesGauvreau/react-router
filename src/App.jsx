// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue.jsx';
import Red from './components/Red.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <div id="container">
      {/* <h1>Hello React Router!</h1> */}
      {/* <p>Test p</p> */}
      <div id="navbar">
        {/* <p>Test nav</p> */}
        <Link to="/blue">Go Blue</Link>
        <Link to="/">Return Home</Link>
        <Link to="/red">Go Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" element={<Blue />} />
          <Route path="/" element={<Home />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
