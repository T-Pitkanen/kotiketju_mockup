import { redirect } from "next/navigation";

// Profile favorites disabled in showcase mode
export default async function FavoritesPage() {
  redirect("/");
}
