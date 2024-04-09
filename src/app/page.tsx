import { redirect } from "next/navigation";

export default async function Home() {
    redirect("https://www.instagram.com/juventudeama/");
    return null;
}
