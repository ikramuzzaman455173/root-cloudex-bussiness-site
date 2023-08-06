import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Components/Home/Home'
import About from '../Pages/About'
import ErrorPage from '../Components/SharedComponents/ErrorPage'
import Products from '../Components/Products/Products'
import Service from '../Components/Service/Service'
import Projects from '../Components/Projects/Projects'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/',
        element:<Home/>
      },
      {
        path: 'about',
        element:<About/>
      },
      {
        path: 'product',
        element:<Products/>
      },
      {
        path: 'Service',
        element:<Service/>
      },
      {
        path: "project",
        element:<Projects/>
      }
    ]
  },
  // {
  //   path: '/dashboard',
  //   element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
  //   errorElement: <ErrorPage />,
  // }
])
