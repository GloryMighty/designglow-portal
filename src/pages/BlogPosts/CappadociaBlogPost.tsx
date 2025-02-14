import React from 'react';
import { motion } from 'framer-motion';
import Toolbar from '../../components/Toolbar';

const CappadociaBlogPost: React.FC = () => {
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
          The Magical Landscapes of Cappadocia: A Journey Through Time
        </h1>
        <img 
          src="https://www.barcelo.com/guia-turismo/wp-content/uploads/2020/03/capadocia_888_3.jpg" 
          alt="Cappadocia Landscape" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-700">
          <p>Cappadocia is not just a destination; it's a portal to another world. Nestled in the heart of Turkey, this extraordinary landscape looks like it was sculpted by giants and painted by artists. The region's distinctive "fairy chimneys" - towering rock formations carved by centuries of wind and rain - create a landscape that seems more like a fantasy realm than a real place.</p>

          <p>The geological wonder of Cappadocia dates back millions of years, when volcanic eruptions covered the region in thick ash. Over time, erosion transformed this ash into the remarkable rock formations we see today. Early inhabitants, recognizing the soft stone's potential, carved intricate cave dwellings and underground cities into these formations.</p>

          <h2 className="mt-8 mb-4 text-3xl">Hot Air Balloon Experience</h2>
          <p>One of the most iconic experiences in Cappadocia is the sunrise hot air balloon ride. As the first light of day breaks, hundreds of colorful balloons rise simultaneously, creating a breathtaking spectacle against the otherworldly landscape. Floating silently above the rock formations, you'll witness a panorama that feels both ancient and timeless.</p>

          <h2 className="mt-8 mb-4 text-3xl">Historical Significance</h2>
          <p>The region is also rich in history and culture. The Göreme Open Air Museum, a UNESCO World Heritage site, showcases Byzantine-era rock-cut churches adorned with stunning frescoes. These churches, hidden within the rocky landscape, tell stories of early Christian communities that found refuge in this remarkable terrain.</p>

          <p>For travelers seeking an experience that transcends typical tourism, Cappadocia offers a journey through geological time, human history, and natural beauty. It's a destination that challenges your perception of what a landscape can be.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CappadociaBlogPost;
