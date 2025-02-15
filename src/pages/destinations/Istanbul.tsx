import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Istanbul = () => {
  const props = {
    title: "Istanbul",
    subtitle: "Where East Meets West",
    description: "Istanbul is a vibrant metropolis straddling two continents, offering a unique blend of historical heritage and modern cosmopolitan life.",
    highlights: ["Hagia Sophia", "Blue Mosque", "Grand Bazaar"],
    image: "https://images.unsplash.com/photo-1527838832700-5059c3e5bfff",
    bestTime: "April to May and September to November for mild weather and fewer crowds.",
    tips: "Take a Bosphorus cruise to see the city from a different perspective.",
    price: 700,
    localCuisine: "Indulge in street food like 'Simit', 'Döner', 'Lahmacun', and traditional mezes. Don't miss Turkish coffee and baklava in historic cafes.",
    culturalExperiences: "Watch a mesmerizing Whirling Dervish ceremony, explore the vibrant Kadıköy market, and enjoy a traditional Turkish hammam experience."
  };
  return <DestinationLayout {...props} />;
};

export default Istanbul;
