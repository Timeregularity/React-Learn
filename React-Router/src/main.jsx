import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from "./components/About/About.jsx"

const container = document.getElementById('root');
const root = createRoot(container);
const router=createBrowserRouter(
[
  {
    path:'/',
    element:<Layout/>,
    children:
    [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"/About",
        element:<About/>
      }
    ]
  }
]
)
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);