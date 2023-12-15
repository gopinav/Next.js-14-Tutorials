export default function ComplexDashboardLayout({
  children,
  users,
  performance,
  activity,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  performance: React.ReactNode;
  activity: React.ReactNode;
}) {
  return (
    <div>
      <h1>{children}</h1>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{performance}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{activity}</div>
      </div>
    </div>
  );
}
