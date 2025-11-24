"use server";

import { redirect } from "next/navigation";

// Auth disabled in showcase mode - all actions redirect to home
export async function signIn(formData: FormData) {
  redirect("/");
}

export async function signUp(formData: FormData) {
  redirect("/");
}
