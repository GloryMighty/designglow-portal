
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../LanguageSelector";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-4 text-center relative z-10">
        <span className="text-accent inline-block mb-4 font-medium tracking-wider animate-fade-in">
          {t("hero.welcome")}
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6 text-white animate-fade-up">
          {t("hero.title")}
        </h1>
        <p className="text-gray-200 max-w-xl mx-auto mb-8 animate-fade-up delay-100">
          {t("hero.description")}
        </p>
        <MapPin className="w-6 h-6 mx-auto mt-12 animate-bounce text-accent" />
      </div>
    </section>
  );
};

export default HeroSection;
