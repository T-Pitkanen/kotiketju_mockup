import { redirect } from "next/navigation";

// Profile blockchain disabled in showcase mode
export default async function BlockchainPage() {
  redirect("/");
}
