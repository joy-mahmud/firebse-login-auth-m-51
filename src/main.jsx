import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import AuthProvider from './components/AuthProvider';
import PrivateRoute from './route/PrivateRoute';
import Oreders from './components/Oreders';
import Profile from './components/Profile';
import Dashboard from './components/Dashboard';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/orders',
        element:<PrivateRoute><Oreders></Oreders></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
