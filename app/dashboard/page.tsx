import { redirect } from "next/navigation";

// Dashboard disabled in showcase mode
export default async function DashboardPage() {
  redirect("/");
}
