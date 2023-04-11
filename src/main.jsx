import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import AppliedJobs from './Components/Applied-Jobs/AppliedJobs';
 
const router = createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch ('category.json')
      },
      {
       path:'/details/:detailsId',
       element:<Details></Details>,
       loader:({params}) => fetch(`featured.json`)
      },
      {
      path:'/appliedjobs',
      element:<AppliedJobs></AppliedJobs>,
      // loader:JobsInfoLoader
      },
      {
        path:'Statistics',
       element:<Statistics></Statistics>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
