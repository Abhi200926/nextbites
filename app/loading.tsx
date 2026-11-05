export default function Loading() {
  return (
    <main
      className="mx-auto w-full max-w-5xl flex-1 px-6 py-12"
      aria-busy="true"
    >
      <div className="mb-10 space-y-3">
        <div className="h-10 w-64 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
        <div className="h-5 w-80 animate-pulse rounded-lg bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="h-36 animate-pulse rounded-2xl bg-zinc-200 dark:bg-zinc-800"
          />
        ))}
      </div>
      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        Loading recipes…
      </p>
    </main>
  );
}
