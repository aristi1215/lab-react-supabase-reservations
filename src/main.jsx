import { createRoot } from 'react-dom/client'
import { AuthContextProvider } from './context/AuthContextProvider.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ReservationContextProvider } from './context/ReservationContext.jsx'
import { Login } from './components/Login.jsx'
import { AdminLogin } from './admin/AdminLogin.jsx'
import { AdminHome } from './admin/AdminHome.jsx'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/admin/login",
    element: <AdminLogin />
  },
  {
    path: "/admin/home",
    element: <AdminHome />
  }
])

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ReservationContextProvider>
    <RouterProvider router={router} />
    </ReservationContextProvider>
  </AuthContextProvider>,
)
