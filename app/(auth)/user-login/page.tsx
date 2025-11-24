import { redirect } from "next/navigation";

// Login disabled in showcase mode
export default function UserLoginPage() {
  redirect("/");
}
