/* Replaced entire file with DestinationLayout usage for Black Sea */
import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const BlackSea = () => {
  const props = {
    title: "Black Sea",
    subtitle: "Mystical Coastal Region",
    description: "The Black Sea region of Turkey offers lush landscapes, charming coastal towns, and a rich cultural heritage. Explore its hidden gems and enjoy local hospitality.",
    highlights: ["Scenic Coastlines", "Lush Greenery", "Traditional Culture"],
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    bestTime: "Late spring or early autumn for pleasant weather and fewer crowds.",
    tips: "Try the local cuisine and visit the small fishing villages for authentic experiences."
  };
  return <DestinationLayout {...props} />;
};

export default BlackSea;
