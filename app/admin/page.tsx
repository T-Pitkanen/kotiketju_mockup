import { redirect } from "next/navigation";

// Admin page disabled in showcase mode
export default async function AdminPage() {
  redirect("/");
}
