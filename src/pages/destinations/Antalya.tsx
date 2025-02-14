/* Replaced entire file with DestinationLayout usage for Antalya */
import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Antalya = () => {
  const props = {
    title: "Antalya",
    subtitle: "Turkish Riviera Gem",
    description: "Antalya offers idyllic beaches, rich history and vibrant nightlife. Explore ancient ruins and relax by the sparkling Mediterranean Sea.",
    highlights: ["Beautiful Beaches", "Ancient Ruins", "Vibrant Nightlife"],
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
    bestTime: "Summer is perfect for beach activities, while Spring and Autumn offer milder weather.",
    tips: "Visit historical sites early in the morning and enjoy a seaside dinner at sunset."
  };
  return <DestinationLayout {...props} />;
};

export default Antalya;
