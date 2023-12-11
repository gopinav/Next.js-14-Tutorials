import Link from "next/link";

export default function NewsLayout({
  children,
  entertainment,
  sports,
  weather,
  login,
}: {
  children: React.ReactNode;
  entertainment: React.ReactNode;
  sports: React.ReactNode;
  weather: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return (
    <>
      <span>
        <Link href="/news">National news</Link>
        <Link href="/news/global">Global news</Link>
      </span>
      {isLoggedIn ? (
        <>
          {children}
          {entertainment}
          {sports}
          {weather}
        </>
      ) : (
        { login }
      )}
    </>
  );
}
