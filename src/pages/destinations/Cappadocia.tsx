/* Replaced entire file with DestinationLayout usage for Cappadocia */
import "../../../src/index.css";
import DestinationLayout from "../../components/DestinationLayout";
import React from "react";

const Cappadocia = () => {
  const props = {
    title: "Cappadocia",
    subtitle: "Land of Fairy Chimneys",
    description: "Cappadocia is known for its unique landscape, rock formations, and ancient cave dwellings. Experience hot air balloon rides over the stunning valleys.",
    highlights: ["Hot Air Balloon Rides", "Ancient Underground Cities", "Unique Rock Formations"],
    image: "https://i0.wp.com/greeneyedtraveller.com/wp-content/uploads/2022/09/misc.-2729.jpg?fit=1000%2C667&ssl=1",
    bestTime: "Late spring or early fall for clear skies and cooler temperatures.",
    tips: "Book your hot air balloon ride in advance and wear comfortable shoes.",
    price: 850
  };
  return <DestinationLayout {...props} />;
};

export default Cappadocia;
