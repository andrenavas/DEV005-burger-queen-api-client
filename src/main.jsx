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
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
