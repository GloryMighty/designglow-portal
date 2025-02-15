import { Calendar, Globe, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatedIcon } from "../ui/AnimatedIcon";

const TravelGuideSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 animate-on-scroll opacity-0 title-3d">
          TRAVEL GUIDE
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="animate-on-scroll opacity-0 md:col-start-1">
            <AnimatedIcon 
              Icon={Calendar} 
              size={8} 
              className="mb-4"
            />
            <h3 className="text-xl font-playfair mb-4 mt-4">{t("travelGuide.bestTime")}</h3>
            <p className="text-gray-600">
              {t("travelGuide.bestTimeDesc")}
            </p>
          </div>
          <div className="animate-on-scroll opacity-0 delay-100 md:col-start-2 flex flex-col items-end">
            <AnimatedIcon 
              Icon={MapPin} 
              size={8} 
              className="mb-4"
            />
            <h3 className="text-xl font-playfair mb-4 mt-4 text-right">{t("travelGuide.gettingAround")}</h3>
            <p className="text-gray-600 text-right">
              {t("travelGuide.gettingAroundDesc")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelGuideSection;
