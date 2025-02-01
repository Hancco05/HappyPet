// src/App.js
import React from 'react';
import './App.css'; // Estilos globales
import Home from './components/Home'; // Importamos el componente Home
import Benefits from "./components/Benefits";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Home /> 
      <Benefits />
      <Footer /> 
    </div>
  );
}

export default App;
