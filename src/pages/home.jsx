import { useState } from "react";
import { fetchRecipes } from "../api/api";
import { Link } from "react-router-dom";

const Home = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      alert("Please enter a search term.");
      return;
    }
    try {
      const res = await fetchRecipes(query);
      setRecipes(res.results);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="container">
      <h2>Search Recipes</h2>
      <input 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by keyword"
      />
      <button className="button" onClick={handleSearch}>Search</button>

      <div className="results-grid">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="card">
            <h3>{recipe.title}</h3>
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              style={{ width: "80%", height: "auto", borderRadius: "5px", margin: "0 auto" }} 
            />

            <Link to={`/recipe/${recipe.id}`} className="button" style={{ marginTop: "10px", display: "inline-block" }}>View Details</Link>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
