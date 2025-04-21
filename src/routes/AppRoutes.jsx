import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import RecipeDetails from "../pages/RecipeDetails";
import Favorites from "../pages/Favorites";
import Navbar from "../components/Navbar";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
