import { motion } from "motion/react";

export const RecipeCard = ({ recipe }) => {
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (recipe[`strIngredient${i}`]) {
      ingredients.push(
        `${recipe[`strIngredient${i}`]} - ${recipe[`strMeasure${i}`]}`
      );
    } else {
      break; 
    }
  }

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-slate-800 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h2 className="text-3xl font-extrabold text-white mb-2">
          {recipe.strMeal}
        </h2>
        <p className="text-slate-400 mb-4">Category: {recipe.strCategory}</p>

        <h3 className="text-xl font-bold text-white mb-2">Ingredients</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};