
import axios from "axios";

const API_KEY ="a90b14888b53441fa8c5ce4102b01408"
const BASE_URL = "https://api.spoonacular.com/recipes";

export const fetchRecipes = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch?apiKey=${API_KEY}&query=${query}&number=10`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipes:", error);
    throw error;
  }
};

export const fetchRecipeDetails = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}/information?apiKey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    throw error;
  }
};