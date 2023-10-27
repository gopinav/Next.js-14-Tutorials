export default function NewsLayout({
  children,
  business,
  entertainment,
  sports,
}: {
  children: React.ReactNode;
  business: React.ReactNode;
  entertainment: React.ReactNode;
  sports: React.ReactNode;
}) {
  return (
    <>
      {children}
      {business}
      {entertainment}
      {sports}
    </>
  );
}
