import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Istanbul = () => {
  const props = {
    title: "Istanbul",
    subtitle: "The Crossroads of Cultures",
    description: "Istanbul has a rich history and vibrant modern attractions, bridging Europe and Asia. Discover ancient sites alongside bustling markets.",
    highlights: ["Historic Sultanahmet", "The Bosphorus Strait", "Grand Bazaar"],
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
    bestTime: "Spring and Autumn are ideal for exploring Istanbul.",
    tips: "Take a Bosphorus cruise and indulge in local Turkish delights.",
    price: 700
  };
  return <DestinationLayout {...props} />;
};

export default Istanbul;
