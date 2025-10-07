import { redirect } from "next/navigation";

export default function RootPage() {
  // Check for saved language preference or default to Turkish
  redirect("/tr");
}
