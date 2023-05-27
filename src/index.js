import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import Blogs from './Components/Blogs/Blogs';


const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals