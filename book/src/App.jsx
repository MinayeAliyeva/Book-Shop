import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Routes } from './routes/Routes'

function App() {
const router=createBrowserRouter(Routes)
  return (
    <>
<RouterProvider router={router}>

</RouterProvider>
    </>
  )
}

export default App
