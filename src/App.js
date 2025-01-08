import React from 'react';
import './styles/App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/Errorpage'
import Layout from './layout/Layout.jsx';
function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    errorElement: <ErrorPage />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"/about",
        element:<About/>
      },
    ],
  },
]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;

// import { createBrowserRouter, RouterProvider } from "react-router-dom"
// import Layout from './layout/Layout.jsx'
// import Errorpage from './pages/Errorpage.jsx'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'
// function App(){
//   const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<Layout/>,
//       errorElement:<Errorpage/>,
//       children:([
//         {
//           index:true,
//           element:<Home/>
//         },
//         {
//           path:'/about',
//           element:<About/>
//         }
//       ])
//     }
//   ])
//   return(
//     <RouterProvider router={router}/>
//   )
// }

// export default App;