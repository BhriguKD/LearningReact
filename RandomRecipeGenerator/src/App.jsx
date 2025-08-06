import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { RecipeCard } from "./RecipeCard";
import { Loader, AlertTriangle } from "lucide-react";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

function App() {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRecipe = async () => {
    setIsLoading(true);
    setError(null);
    setRecipe(null);
    try {
      const response = await axios.get(API_URL);
      setRecipe(response.data.meals[0]);
    } catch (error) {
      console.error("Error fetching recipe:", error);
      setError("Failed to fetch a recipe. Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe();
  }, []); 

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 font-sans">
      <div className="text-center mb-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-2">
          What's for Dinner?
        </h1>
        <p className="text-slate-400">
          Get a random recipe suggestion when you're out of ideas.
        </p>
      </div>

      <div className="w-full max-w-2xl min-h-[400px] flex items-center justify-center mb-8">
        {isLoading && <Loader className="animate-spin text-slate-500" size={48} />}
        {error && <div className="text-red-400 flex items-center gap-2"><AlertTriangle/> {error}</div>}
        {recipe && <RecipeCard recipe={recipe} />}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={fetchRecipe}
        className="bg-pink-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
        disabled={isLoading}
      >
        {isLoading ? "Finding..." : "Get New Recipe"}
      </motion.button>
    </div>
  );
}

export default App;