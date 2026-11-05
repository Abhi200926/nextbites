"use client";

import { useState } from "react";
import type { Recipe } from "../data/recipes";
import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [query, setQuery] = useState("");

  const search = query.trim().toLowerCase();
  const matches = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(search) ||
      recipe.cuisine.toLowerCase().includes(search),
  );

  return (
    <section>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by recipe or cuisine..."
        aria-label="Search recipes"
        className="mb-8 w-full rounded-full border border-black/15 bg-white px-5 py-3 text-base outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 dark:border-white/20 dark:bg-zinc-900"
      />

      {matches.length === 0 ? (
        <p className="py-12 text-center text-zinc-600 dark:text-zinc-400">
          No recipes match &ldquo;{query.trim()}&rdquo;. Try another dish or
          cuisine!
        </p>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {matches.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      )}
    </section>
  );
}
