"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage() {
  return (
    <main className="bg-white rounded-lg m-auto shadow-lg max-w-2xl p-8">
      <div className="text-center">
        <div>
          <strong className="font-bold">Something went wrong!</strong>
          <span className="block sm:inline">Please refresh the page.</span>
        </div>
      </div>
    </main>
  );
}
