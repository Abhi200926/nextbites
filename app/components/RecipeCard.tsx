import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="card">
      <span className="card-cuisine">{recipe.cuisine}</span>
      <h2 className="card-title">{recipe.title}</h2>
      <p className="card-desc">{recipe.description}</p>
      <div className="card-meta">
        <span>⏱ {recipe.minutes} min</span>
        <span>{recipe.difficulty}</span>
      </div>
    </article>
  );
}
