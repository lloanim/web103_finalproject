import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRecipe } from "../api.js";
import RecipeDetail from "../components/RecipeDetail.jsx";
import "../styles/pantry.css";
import "../styles/recipes.css";

// Full page for one recipe at /recipes/:id (same details as the modal)
export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;
    setRecipe(null);
    setError("");
    getRecipe(id)
      .then((data) => !ignore && setRecipe(data))
      .catch((e) => !ignore && setError(e.message));
    return () => { ignore = true; };
  }, [id]);

  return (
    <>
      <p><Link to="/recipes">← Back to recipes</Link></p>
      {error ? (
        <div className="empty card pad">Couldn't load this recipe: {error}</div>
      ) : !recipe ? (
        <p className="muted">Loading recipe…</p>
      ) : (
        <div className="card pad">
          <RecipeDetail recipe={recipe} />
        </div>
      )}
    </>
  );
}
