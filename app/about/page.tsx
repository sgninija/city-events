import Link from "next/link";

export const metadata = {
  title: "About City Events",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col items-center">
      <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
            <div className="flex gap-5 items-center font-semibold">
              <Link href={"/"}>Next.js Supabase Starter</Link>
            </div>
          </div>
        </nav>
        <div className="flex-1 flex flex-col gap-8 max-w-5xl p-5">
          <div className="flex flex-col gap-6 px-4">
            <h1 className="text-4xl font-bold">About City Events</h1>
            <p className="text-lg leading-relaxed">
              City Events is a platform designed to help you discover and explore
              exciting events happening in your city. Whether you're looking for
              concerts, festivals, workshops, or community gatherings, we make it
              easy to find events that match your interests and connect with your
              local community.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="text-primary hover:underline font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

