
import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";
import TravelGuideSection from "../components/sections/TravelGuideSection";

const Guide = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">
          {t("travelGuide.title")}
        </h1>
        <TravelGuideSection />
      </div>
    </div>
  );
};

export default Guide;
