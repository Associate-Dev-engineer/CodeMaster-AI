import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-dvh bg-background text-foreground px-6 text-center">
      <h1 className="text-9xl font-extrabold tracking-widest">404</h1>
      <p className="text-2xl md:text-3xl font-semibold mt-6">Page Not Found</p>

      <p className="mt-3 opacity-70 max-w-md mx-auto">
        The page you’re looking for doesn’t exist or has been moved. Please
        check the URL or return to the homepage.
      </p>

      <Link
        href="/"
        className="inline-block mt-8 px-8 py-3 rounded-lg bg-primary text-primary-foreground shadow hover:opacity-90 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}
