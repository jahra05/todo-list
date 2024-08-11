import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './fonts.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Activity from './Activity.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/activity/:activityId",
    element: <Activity />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
