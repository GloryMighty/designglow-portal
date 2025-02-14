
import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";
import DestinationsSection from "../components/sections/DestinationsSection";

const Destinations = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">
          {t("destinations.title")}
        </h1>
        <DestinationsSection />
      </div>
    </div>
  );
};

export default Destinations;
