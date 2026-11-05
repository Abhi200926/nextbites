"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
      <div className="text-6xl" aria-hidden="true">
        😵
      </div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight">
        Something went wrong
      </h1>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        An unexpected error happened while loading this page.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-6 rounded-full bg-orange-600 px-6 py-3 font-medium text-white hover:bg-orange-700"
      >
        Try again
      </button>
    </main>
  );
}
