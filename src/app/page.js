import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import BackgroundAnimation from "./components/BackgroundAnimation"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#050816] overflow-hidden">
      <Navbar />
      
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
  
      <div className="relative">
        <AboutSection />
          <div className="gradient-04 " />
        <ProjectsSection />
      </div>
      <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
