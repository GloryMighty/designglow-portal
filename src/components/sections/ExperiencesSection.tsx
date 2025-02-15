import { Camera, Globe, Utensils, Landmark } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { AnimatedIcon } from "../ui/AnimatedIcon";

const experiences = [
  { 
    key: "culturalTours",
    icon: <AnimatedIcon Icon={Landmark} size={6} />,
    name: "Cultural Tours",
    description: "Guided explorations of historical sites"
  },
  { 
    key: "photography", 
    icon: <AnimatedIcon Icon={Camera} size={6} />,
    name: "Photography",
    description: "Capture breathtaking Turkish landscapes"
  },
  { 
    key: "culinary", 
    icon: <AnimatedIcon Icon={Utensils} size={6} />,
    name: "Culinary",
    description: "Traditional Turkish cuisine experiences"
  },
];

const ExperiencesSection = () => {
  const { t } = useTranslation();

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-20 bg-cover bg-center text-white" 
      style={{ 
        backgroundImage: `url('https://i.ytimg.com/vi/sKgwpCrdGiU/maxresdefault.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Semi-transparent overlay */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black opacity-5"
      ></motion.div>
      
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-5xl font-playfair text-center mb-16 animate-on-scroll opacity-0 title-3d"
        >
          {t("experiences.title").toUpperCase()}
        </motion.h2>
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.key}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.5 }}
              className="p-8 rounded-lg bg-white/80 shadow-lg animate-on-scroll opacity-100 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-center mb-6 text-accent">
                {experience.icon}
              </div>
              <h3 className="text-gray-600 font-playfair text-center mb-4">
                {t(`experiences.experienceTypes.${experience.key}.name`)}
              </h3>
              <p className="text-gray-600 text-center">
                {t(`experiences.experienceTypes.${experience.key}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ExperiencesSection;
