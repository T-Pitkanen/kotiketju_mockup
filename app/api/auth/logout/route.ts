import { redirect } from "next/navigation";

// Logout disabled in showcase mode
export async function POST() {
  redirect("/");
}
