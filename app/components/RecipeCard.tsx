import Link from "next/link";
import type { Recipe } from "../data/recipes";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <Link href={`/recipe/${recipe.id}`} className="block h-full">
      <article className="flex h-full flex-col gap-3 rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/15 dark:bg-zinc-900">
        <div className="text-4xl" aria-hidden="true">
          {recipe.emoji}
        </div>
        <h2 className="text-lg font-semibold">{recipe.title}</h2>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {recipe.cuisine} · {recipe.time}
        </p>
      </article>
    </Link>
  );
}
