import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './components/pages/login.tsx';
import { Home } from './components/pages/Home.tsx';
import { Signup } from './components/pages/signup.tsx';
import { Chat } from './components/pages/Chat.tsx';
import { Dashboard } from './components/pages/Dashboard.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/Login',
    element: <Login />
  }, {
    path: '/Signup',
    element: <Signup />
  }, {
    path: '/Home',
    element: <Dashboard  />
  }, {
    path: '/Home/chat',
    element: <Chat/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
