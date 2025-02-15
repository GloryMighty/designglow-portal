/* Replaced entire file with DestinationLayout usage for Antalya */
import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Antalya = () => {
  const props = {
    title: "Antalya",
    subtitle: "Turquoise Coast Paradise",
    description: "Antalya offers stunning Mediterranean beaches, ancient ruins, and a perfect blend of history and natural beauty.",
    highlights: ["Beautiful Beaches", "Historic Old Town", "Ancient Ruins"],
    image: "https://blog.obilet.com/wp-content/uploads/2021/11/anagorsel-min-scaled.jpeg",
    bestTime: "Late spring to early autumn for warm weather and beach activities.",
    tips: "Visit the old town (Kaleiçi) and explore its charming streets and historic architecture.",
    price: 500
  };
  return <DestinationLayout {...props} />;
};

export default Antalya;
