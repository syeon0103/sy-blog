import Home from './pages/Home/Home.tsx'
import Work from './pages/WorkPage.tsx'
import Profile from './pages/ProfilePage.tsx'
import Log from './pages/LogPage.tsx'
import Review from './pages/Review.tsx'
import Contact from './pages/ContactPage.tsx'
import BoardWrite from "./pages/BoardWrite.tsx";
import BoardDetail from "./pages/BoardDetail";
import Splash from "./pages/Splash"
import ReviewDetail from "./pages/ReviewDetail.tsx"
import PlayList from "./templates/main/PlayList.tsx";

import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {useEffect, useState} from "react";

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
        path : "/review",
        element : <Review/>
    },
    {
        path : "/contact",
        element : <Contact/>
    },
    {
        path : "/boardWrite",
        element : <BoardWrite/>
    },
    {
        path : "/boardDetail/:id",
        element : <BoardDetail/>
    },
    {
        path : "/reviewDetail/:id",
        element : <ReviewDetail/>
    },
    {
        path : "/playList",
        element : <PlayList/>
    }
])

function App() {





    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <RouterProvider router={router} />
           {/* {loading ? <Splash /> : <RouterProvider router={router} />}*/}
        </>

        )

    /*  return (
          <Home/>
  )*/
}

export default App
