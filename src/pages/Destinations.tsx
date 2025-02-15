import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";

// Import 3D title styles
import "../styles/LogoTitle3D.css";

// Importing destinations from the section component to maintain consistency
import { destinations } from "../components/sections/DestinationsSection";

const Destinations = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from destinations, excluding 'Natural'
  const categories = Array.from(
    new Set(destinations.flatMap((destination) => destination.tags))
  ).filter((category) => category !== "Natural");

  // Filter destinations based on selected category
  const filteredDestinations = selectedCategory
    ? destinations.filter((destination) =>
        destination.tags.includes(selectedCategory)
      )
    : destinations;

  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12 title-3d">
          {t("destinations.pageTitle")}
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === null
                ? "bg-primary text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {t("destinations.allDestinationsButton")}
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {t(`destinations.destinationTags.${category}`)}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((destination, index) => (
            <Link
              to={`/destination/${destination.title.toLowerCase()}`}
              key={destination.title}
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-playfair mb-2">{destination.title}</h3>
                    <p className="text-sm mb-4">{destination.description}</p>
                    <div className="text-black flex flex-wrap gap-2 justify-center">
                      {destination.tags
                        .map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-accent rounded-full text-sm"
                          >
                            {t(`destinations.destinationTags.${tag}`)}
                          </span>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredDestinations.length === 0 && (
          <div className="text-center text-gray-500 mt-12">
            <p>{t("destinations.noDestinationsMessage")}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations;
