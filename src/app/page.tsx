import { Metadata } from "next";
import HomePage from "../components/HomePage";

export const metadata: Metadata = {
  title: "React Exercise (Sameer)",
  description: "Exercise to flex your react muscles",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function Home() {
  return <HomePage />;
}

export default Home;
