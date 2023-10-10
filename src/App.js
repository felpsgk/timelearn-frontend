import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dash from './pages/dash';

function App() {
  return (
    <div>
      <h1>Página Inicial</h1>
      <button
        className='btn-login'
        onClick={() => { window.location.href = '/login'; }}>
        Logar
      </button>
    </div>
  );
}

export default App;