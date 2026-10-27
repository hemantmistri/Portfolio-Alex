import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-5xl flex-col items-center justify-center px-6 text-center sm:px-8">
      <p className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-muted">404</p>
      <h1 className="font-display text-[clamp(2.8rem,7vw,5rem)] leading-none tracking-[-0.06em] text-text">
        Page not found.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted">
        The project or page you’re looking for isn’t available. Head back to the portfolio home.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-accent px-5 py-3 text-sm font-medium text-bg">
        Return home
      </Link>
    </main>
  );
}
