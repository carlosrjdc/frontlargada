import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import rotas from "./routes";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { InfoProvider } from "./contexts";


const router = createBrowserRouter(rotas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <InfoProvider>
      <RouterProvider router={router} />
      </InfoProvider>
  </React.StrictMode>
);


