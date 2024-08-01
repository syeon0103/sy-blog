import Home from './pages/Home/Home.tsx'
import Work from './pages/WorkPage.tsx'
import Profile from './pages/ProfilePage.tsx'
import Log from './pages/LogPage.tsx'
import Life from './pages/LifePage.tsx'
import Contact from './pages/ContactPage.tsx'
import BoardWrite from "./pages/BoardWrite.tsx";

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
      path : "",
      element : <Home/>
  },
    {
        path : "/work",
        element : <Work/>
    },
    {
        path : "/log",
        element : <Log/>
    },
    {
        path : "/profile",
        element : <Profile/>
    },
    {
        path : "/life",
        element : <Life/>
    },
    {
        path : "/contact",
        element : <Contact/>
    },
    {
        path : "/boardWrite",
        element : <BoardWrite/>
    }
])


function App() {

    return <RouterProvider router={router}/>

    /*  return (
          <Home/>
  )*/
}

export default App
