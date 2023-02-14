import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  Navigate
} from "react-router-dom";
import {useContext} from 'react'
import { AuthContext } from "./context/authContext.js";
import Leftbar from './components/Leftbar.jsx';
import Navbar from './components/Navbar.jsx';
import Rightbar from "./components/Rightbar.jsx";
import { DarkModeContext } from './context/darkModeContext'
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Register from "./pages/Register.jsx";
import { QueryClient, QueryClientProvider } from 'react-query'
import './styles/app.css'


function App() {

  const {currentUser} = useContext(AuthContext)

  const {theme} = useContext(DarkModeContext) 

  const queryClient = new QueryClient()

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
        <Navbar />
        <div style={{display: 'flex', backgroundColor: theme === 'dark' ? 'black' : '#FAF9F6'}}>
          <Leftbar />
          <div style={{flex: 6}}>
          <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
      </QueryClientProvider>

    )
}

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element:  (
                <ProtectedRoute>
                  <Layout />
                </ProtectedRoute>
                ),
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile/:id",
          element: <Profile />
        },

      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Register />
    },
  ]);

  return (
   <div>
      <RouterProvider
        router={router}
      />
   </div>
  );
}

export default App;
