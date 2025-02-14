
import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";
import ExperiencesSection from "../components/sections/ExperiencesSection";

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12">
          {t("experiences.title")}
        </h1>
        <ExperiencesSection />
      </div>
    </div>
  );
};

export default Experiences;
