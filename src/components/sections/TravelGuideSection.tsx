
import { Calendar, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";

const TravelGuideSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">
          {t("travelGuide.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <Calendar className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-playfair mb-4">{t("travelGuide.bestTime")}</h3>
            <p className="text-gray-600">
              {t("travelGuide.bestTimeDesc")}
            </p>
          </div>
          <div className="animate-on-scroll opacity-0 delay-100">
            <Globe className="w-8 h-8 text-accent mb-4" />
            <h3 className="text-xl font-playfair mb-4">{t("travelGuide.gettingAround")}</h3>
            <p className="text-gray-600">
              {t("travelGuide.gettingAroundDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuideSection;
