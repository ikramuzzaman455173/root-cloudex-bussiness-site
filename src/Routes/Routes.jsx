import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Components/Home/Home'
import About from '../Pages/About'
import ErrorPage from '../Components/SharedComponents/ErrorPage'


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
      }
    ]
  },
  // {
  //   path: '/dashboard',
  //   element:<PrivateRoute><DashboardLayout /></PrivateRoute>,
  //   errorElement: <ErrorPage />,
  // }
])

