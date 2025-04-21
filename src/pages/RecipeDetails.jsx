import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { fetchRecipeDetails } from "../api/api";
import { AppContext } from "../context/AppContext";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { favorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const res = await fetchRecipeDetails(id);
        setRecipe(res);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };
    getDetails();
  }, [id]);

  const handleAddFavorite = () => {
    setFavorites([...favorites, recipe]);
  };

  return (
    <div className="container">
      <h2>{recipe.title}</h2>
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        style={{ width: "80%", height: "auto", borderRadius: "5px", margin: "0 auto" }} 
      />

      <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
      <button className="button" onClick={handleAddFavorite}>Add to Favorites</button>
    </div>
  );
};

export default RecipeDetails;
