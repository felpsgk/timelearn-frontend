import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/login';
import Cadastro from './pages/cadastro';
import Dash from './pages/dash';


//A INDEX É A CENTRAL DE TUDO, ONDE FICAM AS ROTAS DEFINIDAS
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },{
    path: "/cadastro",
    element: <Cadastro />
  }, {
    path: "/dash",
    element: <Dash />
  }, {
    path: "/app",
    element: <App />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);