"use client";

import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  return <div>DashboardPage {search}</div>;
}
