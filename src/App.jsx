import React from "react";
import "./App.css";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layouts from "./components/Layouts";
import Shop from "./pages/shop/Shop";
import Card from "./pages/card/Card";
import { ShopContextProvider } from "./context/ShopContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path="/" element={<Layouts />}>
          <Route path="/shop" element={<Shop />} />
          <Route path="/card" element={<Card />} />
        </Route>
    </Route>
  )
);
function App() {
  return (
    <>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
      
    </>
  );
}

export default App;
