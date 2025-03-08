import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";
import HeroSection from "../components/sections/HeroSection";
import DestinationsSection from "../components/sections/DestinationsSection";
import ExperiencesSection from "../components/sections/ExperiencesSection";
import TravelGuideSection from "../components/sections/TravelGuideSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  const { t } = useTranslation();

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
      <Toolbar className="bg-transparent" />
      <HeroSection className="three-d-title" />
      <DestinationsSection className="three-d-title" />
      <ExperiencesSection className="three-d-title" />
      <TravelGuideSection className="three-d-title" />
      <ContactSection className="three-d-title" />
      <footer className="py-8 text-center text-gray-600 bg-[#808000] bg-opacity-10">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
      </footer>
    </div>
  );
};

export default Index;
