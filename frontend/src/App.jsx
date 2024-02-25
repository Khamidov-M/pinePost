import React from "react";
import Singin from "./components/Singin";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<Singin />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
