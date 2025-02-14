import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Pamukkale = () => {
  const props = {
    title: "Pamukkale",
    subtitle: "Cotton Castle of Travertines",
    description: "Pamukkale is famous for its white travertine terraces and mineral-rich thermal waters. Enjoy a relaxing soak while admiring this natural wonder.",
    highlights: ["Travertine Terraces", "Thermal Springs", "Ancient Ruins nearby"],
    image: "https://images.unsplash.com/photo-1558888400-4a8cde7b6e9f",
    bestTime: "Spring and Autumn are best to avoid the summer heat.",
    tips: "Wear comfortable shoes and bring swimwear to enjoy the thermal pools."
  };
  return <DestinationLayout {...props} />;
};

export default Pamukkale;
