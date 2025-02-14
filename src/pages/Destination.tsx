
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, MapPin, Calendar, Info } from "lucide-react";

const Destination = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!id || !["istanbul", "cappadocia", "antalya"].includes(id)) {
    return <div>Destination not found</div>;
  }

  const destination = t(`destinations.${id}`, { returnObjects: true }) as {
    title: string;
    subtitle: string;
    description: string;
    highlights: string[];
  };

  const images: Record<string, string> = {
    istanbul: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
    cappadocia: "https://images.unsplash.com/photo-1570854009466-78800d0c743a",
    antalya: "https://images.unsplash.com/photo-1542051841857-5f90071e7989"
  };

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={images[id]}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 animate-fade-up">
              {destination.title}
            </h1>
            <p className="text-xl animate-fade-up delay-100">{destination.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-accent hover:text-soft-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("navigation.home")}
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="text-2xl font-playfair mb-6">{t("destinations.about")}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{destination.description}</p>
              <div className="space-y-4">
                {destination.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center text-gray-700"
                  >
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 animate-fade-up delay-100">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Calendar className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl font-playfair mb-3">{t("destinations.bestTime")}</h3>
                <p className="text-gray-600">
                  {t("destinations.seasonalInfo")}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Info className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl font-playfair mb-3">{t("destinations.tips")}</h3>
                <p className="text-gray-600">
                  {t("destinations.localTips")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Destination;
