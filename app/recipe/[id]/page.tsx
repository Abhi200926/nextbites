import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getRecipe, recipes } from "../../data/recipes";

// Pre-build one page per recipe. With a static export, any id not listed
// here has no page and falls through to the 404 page.
export function generateStaticParams() {
  return recipes.map((recipe) => ({ id: recipe.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const recipe = getRecipe(id);
  if (!recipe) return { title: "Recipe not found" };
  return {
    title: recipe.title,
    description: `${recipe.title}: ${recipe.cuisine} recipe ready in ${recipe.time}. See the ingredients and steps.`,
  };
}

export default async function RecipePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = getRecipe(id);

  if (!recipe) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-12">
      <Link
        href="/"
        className="text-sm font-medium text-orange-600 hover:underline"
      >
        &larr; Back to all recipes
      </Link>

      <header className="mt-6 mb-8">
        <div className="text-6xl" aria-hidden="true">
          {recipe.emoji}
        </div>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          {recipe.title}
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          {recipe.cuisine} · {recipe.time}
        </p>
      </header>

      <section className="mb-8">
        <h2 className="mb-3 text-2xl font-semibold">Ingredients</h2>
        <ul className="list-disc space-y-1 pl-6">
          {recipe.ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold">Steps</h2>
        <ol className="list-decimal space-y-2 pl-6">
          {recipe.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
