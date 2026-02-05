import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import "./globals.css";
import HomeMenu from "@/components/HomeMenu";
import Footer from "@/components/Footer";
import Testimony from "@/components/Testimony";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeMenu page="home" />
      <Testimony />
      <Footer />
    </>
  );
}
