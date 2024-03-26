import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root/Root';
import Home from './assets/Components/Home/Home';
import Jobs from './assets/Components/Jobs/Jobs';
import AppliedJos from './assets/Components/AppliedJobs/AppliedJos';
import Statistics from './assets/Components/Statistics/Statistics';
import Blogs from './assets/Components/Blogs/Blogs';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage';
import JobDetails from './assets/Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "/jobDetails/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: "/appliedJobs",
        element: <AppliedJos></AppliedJos>,
        loader : () => fetch('../categories.json')
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
