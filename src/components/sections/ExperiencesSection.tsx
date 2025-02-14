import { Camera, Globe, Utensils } from "lucide-react";
import { useTranslation } from "react-i18next";

const experiences = [
  { 
    name: "Cultural Tours", 
    icon: <Globe className="w-6 h-6" />, 
    description: "Guided explorations of historical sites" 
  },
  { 
    name: "Photography", 
    icon: <Camera className="w-6 h-6" />, 
    description: "Capture breathtaking Turkish landscapes" 
  },
  { 
    name: "Culinary", 
    icon: <Utensils className="w-6 h-6" />, 
    description: "Traditional Turkish cuisine experiences" 
  },
];

const ExperiencesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0 three-d-title">
          {t("experiences.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.name}
              className="p-8 rounded-lg bg-white shadow-lg animate-on-scroll opacity-0 hover:transform hover:-translate-y-2 transition-transform duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-center mb-6 text-accent">
                {experience.icon}
              </div>
              <h3 className="text-xl font-playfair text-center mb-4">{experience.name}</h3>
              <p className="text-gray-600 text-center">{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
