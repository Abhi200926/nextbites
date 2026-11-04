import RecipeGrid from "./components/RecipeGrid";
import { recipes } from "./data/recipes";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight">NextBites 🍽️</h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          Find your next favourite recipe.
        </p>
      </header>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}
