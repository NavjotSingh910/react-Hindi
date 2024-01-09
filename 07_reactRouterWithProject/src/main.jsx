import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import {Home,About,Contact,GitHub,User,githubInfoLoader} from './components'

// const myRouter=createBrowserRouter([
//   {
//     path:"/",
//     element:<Layout/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//       {
//         path:"github",
//         element:<GitHub/>
//       }
//     ]
//   }
// ])

//another way to define router 
const myRouter= createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}>
        {/* nesting of path
        <Route path='hitesh' element={<Home/>}/> not working read more for this*/}
      </Route>
      <Route path='contact' element={<Contact/>}/>
      <Route
        loader={githubInfoLoader}
       path='github' element={<GitHub/>}/>
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myRouter}/>
  </React.StrictMode>,
)
