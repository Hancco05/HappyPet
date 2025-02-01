// src/App.js
import React from 'react';
import './App.css'; // Estilos globales
import Home from './components/Home'; // Importamos el componente Home
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className="App">
      <Home /> {/* Usamos el componente Home aquí */}
      <Benefits />
    </div>
  );
}

export default App;
