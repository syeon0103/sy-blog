import Home from './pages/Home/Home.tsx'
import Work from './pages/WorkPage.tsx'
import Profile from './pages/ProfilePage.tsx'
import Log from './pages/LogPage.tsx'
import Review from './pages/Review.tsx'
import Contact from './pages/ContactPage.tsx'
import BoardWrite from "./pages/BoardWrite.tsx";
import BoardDetail from "./pages/BoardDetail";
import ReviewDetail from "./pages/ReviewDetail.tsx"
import PlayList from "./templates/main/PlayList.tsx";

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

   /* const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);
*/

    if (import.meta.env.VITE_REACT_APP_ENV === 'development') {
        console.log("로컬 환경에서 실행 중입니다.")
    } else {
        console.log("배포 환경에서 실행 중입니다.")
    }

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
