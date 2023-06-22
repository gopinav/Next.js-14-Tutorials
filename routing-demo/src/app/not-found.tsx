import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Could not find requested resource</p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </div>
  );
}
