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
import FeaturedJobs from './Components/FeaturedJobs/FeaturedJobs';
import ViewDetails from './Components/ViewDetails/ViewDetails';
import { ThemeProvider } from "@material-tailwind/react";
import ErrorPage from './Components/ErrorPage/ErrorPage';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage></ErrorPage>,
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobCategory.json')
      },
      {
        path: '/',
        element: <FeaturedJobs></FeaturedJobs>
      },
      {
        path: '/:jobId',
        element: <ViewDetails></ViewDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/featuredJobs.json');
          const data = await res.json();
          const indiData = data.find(d => d.id == params.jobId);
          return indiData;
        }
      },
      {
        path: 'statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/assignmentMarks.json')
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>,
        loader: async () => {
          const res = await fetch('/featuredJobs.json');
          const data = await res.json();
          return data;
        }
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

    <ThemeProvider>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals