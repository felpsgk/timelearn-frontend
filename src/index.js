import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/login';
import Dash from './pages/dash';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
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