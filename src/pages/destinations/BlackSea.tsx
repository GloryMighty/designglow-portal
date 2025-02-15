/* Replaced entire file with DestinationLayout usage for Black Sea */
import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const BlackSea = () => {
  const props = {
    title: "Black Sea Region",
    subtitle: "Lush Green Landscapes",
    description: "The Black Sea region offers verdant landscapes, traditional villages, tea plantations, and a unique cultural experience.",
    highlights: ["Green Mountains", "Tea Plantations", "Traditional Wooden Houses"],
    image: "https://images.unsplash.com/photo-1597200661514-d07b69898d7d",
    bestTime: "Summer for lush green landscapes and mild temperatures.",
    tips: "Visit local tea gardens and explore traditional mountain villages.",
    price: 550
  };
  return <DestinationLayout {...props} />;
};

export default BlackSea;
