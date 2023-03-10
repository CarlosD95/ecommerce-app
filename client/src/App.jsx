import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Product from './Pages/Product'
import Products from './Pages/Products'
import Home from './Pages/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './App.scss'
import Contact from "./components/Contact";



const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Contact/>
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products/:id',
        element: <Products />
      },
      {
        path: '/product/:id',
        element: <Product />
      },
    ]
  }
]);

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
