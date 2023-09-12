import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Phones from './components/Phones.jsx'
import SinglePhone from './components/singlePhone.jsx'
import ErrorPage from './error-page.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"/phones",
        element:<Phones/>,
        loader: ()=>fetch('http://localhost:5000'),
        errorElement: <ErrorPage />,
      },
      {
        path:"/phones/:id",
        element:<SinglePhone/>,
        loader: ({params})=>fetch(`http://localhost:5000/phones/${params.id}`),
        errorElement: <ErrorPage />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
