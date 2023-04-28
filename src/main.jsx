import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Users from './components/Users/Users.jsx';
import UserDetail from './components/UserDetail/UserDetail.jsx';
import POsts from './components/Posts/POsts.jsx';
import PostDetail from './components/PostDetail/PostDetail.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

// first way
/*     const router = createBrowserRouter([
     {
       path: '/',
       element: <App />
     },
     {
       path: '/about',
       element: <About></About>
     },
     {
       path: '/contact',
       element: <Contact></Contact>
     }
     ]);
*/

//second way

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'users',
        element: <Users></Users>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'user/:userId',
        element: <UserDetail></UserDetail>,
        loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
      },
      {
          path: 'posts',
          element: <POsts></POsts>,
          loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
          path: 'post/:postId',
          element: <PostDetail></PostDetail>,
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
