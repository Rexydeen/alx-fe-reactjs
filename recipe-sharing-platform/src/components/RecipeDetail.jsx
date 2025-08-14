import { useEffect, useState } from "react";
import recipesData from "../data.json";

export default  function RecipeDetail() {
  const { id } = useParams();

  // simulate loading on mount
  useEffect(() => {
    setRecipes(recipesData);
    const url = new URL("../data.json", import.meta.url);

    // If you prefer a real fetch from src/, use:
    // const url = new URL("../data.json", import.meta.url);
    // fetch(url).then(r => r.json()).then(setRecipes);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
         <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-4" />
         <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
         <h3 className="text-lg font-semibold mt-4">Ingredients</h3>
         <ul className="list-disc list-inside text-gray-700">
            {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
         </ul>
         <h3 className="text-lg font-semibold mt-6">Instructions</h3>
         <p className="text-gray-700 mt-2 leading-relaxed">{recipe.instructions}</p>
     </div>

    </main>
  );
}