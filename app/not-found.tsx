import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="text-6xl" aria-hidden="true">
        🍳
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        We couldn&apos;t find that recipe
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        It may have been removed, or the link might be mistyped.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-full bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
      >
        Back to all recipes
      </Link>
    </main>
  );
}
