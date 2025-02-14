import React from 'react';
import { motion } from 'framer-motion';
import Toolbar from '../../components/Toolbar';

const TurquoiseCoastBlogPost: React.FC = () => {
  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          The Turquoise Coast: Turkey's Mediterranean Paradise
        </h1>
        <img 
          src="https://cxgveiouca.cloudimg.io/familyhotelfinder.com/wp-content/uploads/Turkey-Turquoise-Coast-destination24-SH.jpg?w=960&h=540&func=cover" 
          alt="Turquoise Coast" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-700">
          <p>Turkey's Mediterranean coastline, often called the Turquoise Coast, is a breathtaking stretch of azure waters, hidden coves, and historical treasures. Spanning from Antalya to Fethiye, this region offers a mesmerizing combination of natural beauty and rich historical heritage.</p>

          <h2 className="mt-8 mb-4 text-3xl">Ancient Lycian Civilization</h2>
          <p>The ancient Lycian civilization once thrived in this region, leaving behind remarkable rock tombs and archaeological sites. Cities like Patara and Xanthos stand as open-air museums, where visitors can walk among ruins that date back thousands of years. The rock tombs of Myra, carved directly into cliff faces, showcase the extraordinary architectural skills of the Lycians.</p>

          <h2 className="mt-8 mb-4 text-3xl">Sailing and Exploration</h2>
          <p>Sailing is the quintessential way to experience the Turquoise Coast. Traditional wooden gulets, handcrafted sailing boats, offer multi-day cruises that allow travelers to explore secluded bays, swim in crystal-clear waters, and anchor near ancient ruins. Each day brings a new landscape: one moment you're swimming in a hidden cove, the next you're exploring a historical site accessible only by boat.</p>

          <h2 className="mt-8 mb-4 text-3xl">Charming Coastal Towns</h2>
          <p>The town of Kaş epitomizes the region's charm. With its narrow cobblestone streets, bougainvillea-draped houses, and stunning sea views, it offers a perfect blend of traditional Turkish hospitality and Mediterranean lifestyle. Nearby, the sunken city of Kekova provides a unique underwater archaeological experience, where visitors can see the remains of an ancient Lycian settlement submerged by earthquakes.</p>

          <h2 className="mt-8 mb-4 text-3xl">Natural Wonders</h2>
          <p>For nature lovers, the region offers diverse experiences. The Butterfly Valley near Fethiye is a protected natural wonder, home to hundreds of butterfly species. Hiking the Lycian Way, one of the world's most beautiful long-distance walking routes, allows travelers to experience the region's diverse landscapes, from mountain trails to coastal paths.</p>

          <p>The Turquoise Coast isn't just a destination; it's a sensory experience that combines natural beauty, historical depth, and the warm hospitality of Turkish culture.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TurquoiseCoastBlogPost;
