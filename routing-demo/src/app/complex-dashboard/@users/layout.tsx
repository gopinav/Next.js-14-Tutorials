import Card from "@/components/card";

export default function ComplexDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Card>{children}</Card>;
}
