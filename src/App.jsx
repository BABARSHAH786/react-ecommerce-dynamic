
import './App.css'
import Nav from './components/Nav'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SecTop from './components/SectionTop';
import SecMid from './components/SsctionMid';
import About from './components/About';


function App() {
  const router = createBrowserRouter([
    {path:"/",
     element:<SecTop/>},
    {path:"/SecMid",
    element:<SecMid/>},
    {path:"/About",
    element:<About/>},
 ])

  return (
    <>
    <Nav/>
    <RouterProvider router={router} />

     
      
    </>
  )
}

export default App
