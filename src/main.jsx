import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Project from './components/Project/Project.jsx'
import Contact from './components/Contact/Contact.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children: [
      {
        path:'',
        element:<Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'project',
        element:<Project/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router ={router}/>
   </React.StrictMode>,
)
