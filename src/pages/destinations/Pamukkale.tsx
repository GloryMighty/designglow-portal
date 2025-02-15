import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Pamukkale = () => {
  const props = {
    title: "Pamukkale",
    subtitle: "Cotton Castle of Turkey",
    description: "Pamukkale, meaning 'Cotton Castle', is famous for its stunning white travertine terraces and ancient thermal pools, offering a unique natural and historical experience.",
    highlights: ["White Travertine Terraces", "Hierapolis Ancient City", "Thermal Pools"],
    image: "https://images.unsplash.com/photo-1597200661514-d07b69898d7d",
    bestTime: "Spring and autumn for comfortable temperatures and fewer crowds.",
    tips: "Bring swimwear to enjoy the thermal pools and wear water-friendly shoes on the terraces.",
    price: 550
  };
  return <DestinationLayout {...props} />;
};

export default Pamukkale;
