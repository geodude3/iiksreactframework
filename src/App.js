import MenuBar from './components/menuBar';
import './styles/App.css';
import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Api from './pages/Api';
import { Route, Link, Routes } from "react-router-dom"


function App() {

  return (
    <div className='content'>
      <MenuBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/api" element={<Api/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

/*
      <MenuBar />

<p>
        Data: {data}
        
      </p>
      <p>Connections: {connect}</p>
*/