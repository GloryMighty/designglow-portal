import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const destinations = [
  {
    title: "Istanbul",
    description: "Where East meets West, ancient meets modern",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
    tags: ["Historical", "Cultural", "Urban"],
  },
  {
    title: "Cappadocia",
    description: "Magical landscapes and hot air balloon adventures",
    image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/03/capadocia_888_3.jpg",
    tags: ["Nature", "Adventure", "Unique"],
  },
  {
    title: "Antalya",
    description: "Mediterranean paradise with pristine beaches",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    tags: ["Beach", "Luxury", "Resort"],
  },
  {
    title: "Pamukkale",
    description: "Natural thermal springs and ancient ruins",
    image: "https://images.izmirburaya.com/Images/Deals/1200x1200/4f6023c7-aead-4daa-b2cc-1246d8ffb918.jpg",
    tags: ["Natural", "Thermal", "Historical"],
  },
  {
    title: "Ephesus",
    description: "Ancient Roman city and archaeological wonder",
    image: "https://www.kusadasi.biz/_astro/t_ephesus-1.C67GQm7V.jpg",
    tags: ["Archaeological", "Historical", "Cultural"],
  },
  {
    title: "Black Sea",
    description: "Lush mountains and traditional villages",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
    tags: ["Nature", "Traditional", "Mountains"],
  },
];

const DestinationsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0 title-3d">
          {t("destinations.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Link
              to={`/destination/${destination.title.toLowerCase()}`}
              key={destination.title}
              className="group relative overflow-hidden rounded-lg animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-playfair mb-2">{destination.title}</h3>
                  <p className="text-sm mb-4">{destination.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {destination.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-accent rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
