import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Ephesus = () => {
  const props = {
    title: "Ephesus",
    subtitle: "Ancient City of Wonders",
    description: "Ephesus is one of the most well-preserved ancient cities in the world, offering a breathtaking journey through Roman and Greek history.",
    highlights: ["Library of Celsus", "Temple of Artemis", "Ancient Theater"],
    image: "https://images.unsplash.com/photo-1597200661514-d07b69898d7d",
    bestTime: "Spring and autumn for mild temperatures and fewer crowds.",
    tips: "Wear comfortable walking shoes and bring water for exploring the extensive archaeological site.",
    price: 450
  };
  return <DestinationLayout {...props} />;
};

export default Ephesus;
