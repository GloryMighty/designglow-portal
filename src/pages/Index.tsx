
import { useEffect } from "react";
import HeroSection from "../components/sections/HeroSection";
import DestinationsSection from "../components/sections/DestinationsSection";
import ExperiencesSection from "../components/sections/ExperiencesSection";
import TravelGuideSection from "../components/sections/TravelGuideSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-soft-gray">
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <TravelGuideSection />
      <ContactSection />
      <footer className="py-8 text-center text-gray-600 bg-white">
        <p>&copy; {new Date().getFullYear()} Turkish Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
