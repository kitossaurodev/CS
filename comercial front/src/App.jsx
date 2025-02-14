import { Routes, Route } from "react-router-dom";
import MainLayout from "./components.layouts/MainLayout"
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}




