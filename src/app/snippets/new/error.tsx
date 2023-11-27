"use client";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  return (
    <div>
      <div>{error.message}</div>
    </div>
  );
}
