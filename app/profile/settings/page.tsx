import { redirect } from "next/navigation";

// Profile settings disabled in showcase mode
export default async function SettingsPage() {
  redirect("/");
}
