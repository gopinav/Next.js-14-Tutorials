export default function NewsLayout({
  children,
  business,
  entertainment,
  sports,
  login,
}: {
  children: React.ReactNode;
  business: React.ReactNode;
  entertainment: React.ReactNode;
  sports: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = false;
  const news = (
    <>
      {children}
      {business}
      {entertainment}
      {sports}
    </>
  );
  const Component = isLoggedIn ? news : login;
  return Component;
}
