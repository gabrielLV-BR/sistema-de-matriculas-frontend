import { permanentRedirect } from "next/navigation"

export default async function Root() {
  permanentRedirect("/home");
}
