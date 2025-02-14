import React from 'react';
import { motion } from 'framer-motion';
import Toolbar from '../../components/Toolbar';

const CulinaryJourneyBlogPost: React.FC = () => {
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
          Culinary Journey: The Rich Flavors of Turkish Cuisine
        </h1>
        <img 
          src="https://deraliyerestaurant.com/wp-content/uploads/2024/05/geleneksel-turk-yemekleri.jpg" 
          alt="Turkish Cuisine" 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
        <div className="prose lg:prose-xl text-gray-700">
          <p>Turkish cuisine is a vibrant tapestry of flavors, techniques, and cultural influences that reflect the country's rich historical heritage. Spanning from the Mediterranean to Central Asia, Turkish food is far more than sustenance - it's a storytelling medium that connects generations and regions.</p>

          <h2 className="mt-8 mb-4 text-3xl">Turkish Breakfast: A Feast of Flavors</h2>
          <p>Breakfast in Turkey is an elaborate affair. A typical Turkish breakfast, or "kahvaltı", is a spread of small dishes that can include fresh bread, various cheeses, olives, tomatoes, cucumbers, honey, clotted cream, and multiple types of preserves. Each region adds its unique touch, making breakfast a culinary journey across the country.</p>

          <h2 className="mt-8 mb-4 text-3xl">Kebabs: Beyond Street Food</h2>
          <p>Kebabs, perhaps Turkey's most famous culinary export, are far more diverse than most international diners realize. From the tender Adana kebab of southern Turkey to the delicate şiş kebab, each variety tells a story of local ingredients and cooking traditions. In Istanbul and central Anatolia, street vendors and high-end restaurants alike take pride in their unique kebab preparations.</p>

          <h2 className="mt-8 mb-4 text-3xl">Meze Culture: Sharing and Community</h2>
          <p>Meze culture represents the social heart of Turkish dining. These small, flavorful dishes are meant to be shared, encouraging conversation and community. From stuffed vine leaves (dolma) to smoky eggplant salads and spicy walnut dips, meze embodies the generous spirit of Turkish hospitality.</p>

          <h2 className="mt-8 mb-4 text-3xl">Sweet Traditions</h2>
          <p>Desserts in Turkish cuisine are an art form. Baklava, with its layers of thin pastry, nuts, and sweet syrup, varies by region. In the southeast, pistachio baklava reigns supreme, while in other areas, walnut or almond versions are preferred. Turkish delight (lokum) and künefe, a cheese-based dessert, showcase the complexity of Turkish sweet traditions.</p>

          <h2 className="mt-8 mb-4 text-3xl">Street Food: Cultural Institutions</h2>
          <p>Street food offers another dimension of Turkish culinary experience. Simit (sesame-crusted bread rings), börek (layered pastries), and döner are not just quick meals but cultural institutions. Each bite tells a story of regional ingredients, cooking techniques passed through generations, and the communal spirit of Turkish society.</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CulinaryJourneyBlogPost;
