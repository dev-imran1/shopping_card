import React from 'react'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from './components/Layouts';
import Shop from './pages/shop/Shop';
import Card from './pages/card/Card';
import { Car } from 'phosphor-react';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layouts />}>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/card' element={<Card />}/>
    </Route>
  ))
function App() {

  return (
    <>
         <RouterProvider router={router}/>
    </>
  )
}

export default App
