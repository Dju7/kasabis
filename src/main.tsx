import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Home from './Pages/Home'
import { loader as homeloader} from './api/LoadData.tsx'
import About from './Pages/About'
import Logements from './Pages/Logements'
import { loaderId as lodgingloader } from './api/LoadData.tsx'
import Error from './Components/Error'
import './index.css'

const Router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<App />}>
      <Route index element={<Home />} loader={homeloader} />
      <Route path="About" element={<About />} />
      <Route path="Logements/:id" element={<Logements />} loader={lodgingloader} />
      <Route path="*" element={<Error />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
