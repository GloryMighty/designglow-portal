import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Ephesus = () => {
  const props = {
    title: "Ephesus",
    subtitle: "Ancient City of Wonders",
    description: "Ephesus is known for its well-preserved ruins and ancient architecture. Explore the Library of Celsus, Amphitheatre, and Temple of Artemis.",
    highlights: ["Library of Celsus", "Ancient Theatre", "Temple of Artemis"],
    image: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf",
    bestTime: "Spring and Autumn offer mild weather for touring the ruins.",
    tips: "Hire a local guide to understand the historical context of the ruins."
  };
  return <DestinationLayout {...props} />;
};

export default Ephesus;
