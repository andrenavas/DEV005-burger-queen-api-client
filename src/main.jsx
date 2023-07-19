import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './components/login.jsx';
import ErrorPage from './components/error-page';
import Waiter from './components/waiter';
import Chef from './components/chef';
import StatusOrder from './components/status-order';
import Admin from './components/admin';
import AdminProducts from './components/adminProduct'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/waiter",
    element: <Waiter/>,
  },
  {
    path: "/chef",
    element: <Chef/>,
  },
  {
    path: "/statusorder",
    element: <StatusOrder/>,
  },
  {
    path: "/admin",
    element: <Admin/>,
  },
  {
    path: "/adminProducts",
    element: <AdminProducts/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
