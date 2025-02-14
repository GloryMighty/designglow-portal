import React from 'react';
import { motion } from 'framer-motion';
import Toolbar from '../../components/Toolbar';

const IstanbulBlogPost: React.FC = () => {
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
          Istanbul: Where Continents and Cultures Converge
        </h1>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Modern_Istanbul_skyline.jpg" 
          alt="Istanbul Skyline" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-700">
          <p>Istanbul is more than a city; it's a living museum where continents, cultures, and centuries intertwine. Straddling both Europe and Asia across the Bosphorus Strait, Istanbul embodies the perfect fusion of historical depth and contemporary energy.</p>

          <h2 className="mt-8 mb-4 text-3xl">Historical Landmarks</h2>
          <p>The city's heart beats in its historic peninsula, where the magnificent Hagia Sophia stands as a testament to architectural and cultural transformation. Originally a Byzantine cathedral, then an Ottoman mosque, and now a museum, this structure symbolizes Istanbul's complex historical narrative. Its massive dome and intricate mosaics tell stories of empires, religions, and artistic achievements.</p>

          <p>Just steps away, the Blue Mosque (Sultan Ahmed Mosque) offers another architectural marvel. Its six minarets and cascading domes create a silhouette that has defined Istanbul's skyline for centuries. Inside, over 20,000 handmade İznik tiles in various shades of blue create an ethereal atmosphere that leaves visitors breathless.</p>

          <h2 className="mt-8 mb-4 text-3xl">Markets and Modern Life</h2>
          <p>Beyond monuments, Istanbul's soul lives in its bazaars and markets. The Grand Bazaar, one of the world's oldest and largest covered markets, is a labyrinth of over 4,000 shops. Here, traditional craftsmen sell everything from intricate carpets to gleaming copper cookware, maintaining centuries-old trading traditions.</p>

          <p>Modern Istanbul pulses with creativity and innovation. Neighborhoods like Beyoğlu showcase contemporary art galleries, cutting-edge restaurants, and a vibrant nightlife that rivals any global metropolis. Street art adorns historical walls, young entrepreneurs run innovative startups, and traditional tea houses sit comfortably beside trendy cafes.</p>

          <h2 className="mt-8 mb-4 text-3xl">Culinary Experiences</h2>
          <p>Culinary experiences in Istanbul are a journey through flavors. From street vendors selling simit (circular sesame bread) to sophisticated restaurants reimagining Ottoman cuisine, the city is a gastronomic paradise that reflects its multicultural heritage.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default IstanbulBlogPost;
