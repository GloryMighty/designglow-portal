import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import Toolbar from "../components/Toolbar";
import TravelGuideSection from "../components/sections/TravelGuideSection";

// Import 3D title styles
import "../styles/LogoTitle3D.css";

import React from 'react';
import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: number;
  route: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Magical Landscapes of Cappadocia: A Journey Through Time",
    excerpt: "Discover the surreal rock formations, ancient cave dwellings, and breathtaking hot air balloon experiences in one of Turkey's most unique regions.",
    content: `Cappadocia is not just a destination; it's a portal to another world. Nestled in the heart of Turkey, this extraordinary landscape looks like it was sculpted by giants and painted by artists. The region's distinctive "fairy chimneys" - towering rock formations carved by centuries of wind and rain - create a landscape that seems more like a fantasy realm than a real place.

The geological wonder of Cappadocia dates back millions of years, when volcanic eruptions covered the region in thick ash. Over time, erosion transformed this ash into the remarkable rock formations we see today. Early inhabitants, recognizing the soft stone's potential, carved intricate cave dwellings and underground cities into these formations.

One of the most iconic experiences in Cappadocia is the sunrise hot air balloon ride. As the first light of day breaks, hundreds of colorful balloons rise simultaneously, creating a breathtaking spectacle against the otherworldly landscape. Floating silently above the rock formations, you'll witness a panorama that feels both ancient and timeless.

The region is also rich in history and culture. The Göreme Open Air Museum, a UNESCO World Heritage site, showcases Byzantine-era rock-cut churches adorned with stunning frescoes. These churches, hidden within the rocky landscape, tell stories of early Christian communities that found refuge in this remarkable terrain.

For travelers seeking an experience that transcends typical tourism, Cappadocia offers a journey through geological time, human history, and natural beauty. It's a destination that challenges your perception of what a landscape can be.`,
    imageUrl: "https://www.dailycappadociatour.com/wp-content/uploads/slider4/2-dias-1-noche-capadocia-tour.jpg",
    readTime: 5,
    route: "/guide/cappadocia"
  },
  {
    id: 2,
    title: "Istanbul: Where Continents and Cultures Converge",
    excerpt: "Explore the vibrant metropolis that bridges Europe and Asia, showcasing a mesmerizing blend of historical grandeur and modern dynamism.",
    content: `Istanbul is more than a city; it's a living museum where continents, cultures, and centuries intertwine. Straddling both Europe and Asia across the Bosphorus Strait, Istanbul embodies the perfect fusion of historical depth and contemporary energy.

The city's heart beats in its historic peninsula, where the magnificent Hagia Sophia stands as a testament to architectural and cultural transformation. Originally a Byzantine cathedral, then an Ottoman mosque, and now a museum, this structure symbolizes Istanbul's complex historical narrative. Its massive dome and intricate mosaics tell stories of empires, religions, and artistic achievements.

Just steps away, the Blue Mosque (Sultan Ahmed Mosque) offers another architectural marvel. Its six minarets and cascading domes create a silhouette that has defined Istanbul's skyline for centuries. Inside, over 20,000 handmade İznik tiles in various shades of blue create an ethereal atmosphere that leaves visitors breathless.

Beyond monuments, Istanbul's soul lives in its bazaars and markets. The Grand Bazaar, one of the world's oldest and largest covered markets, is a labyrinth of over 4,000 shops. Here, traditional craftsmen sell everything from intricate carpets to gleaming copper cookware, maintaining centuries-old trading traditions.

Modern Istanbul pulses with creativity and innovation. Neighborhoods like Beyoğlu showcase contemporary art galleries, cutting-edge restaurants, and a vibrant nightlife that rivals any global metropolis. Street art adorns historical walls, young entrepreneurs run innovative startups, and traditional tea houses sit comfortably beside trendy cafes.

Culinary experiences in Istanbul are a journey through flavors. From street vendors selling simit (circular sesame bread) to sophisticated restaurants reimagining Ottoman cuisine, the city is a gastronomic paradise that reflects its multicultural heritage.`,
    imageUrl: "https://cdnuploads.aa.com.tr/uploads/Contents/2024/05/03/thumbs_b_c_d09ebaa48d4181a43c143f53b35bcba0.jpg?v=112927",
    readTime: 6,
    route: "/guide/istanbul"
  },
  {
    id: 3,
    title: "The Turquoise Coast: Turkey's Mediterranean Paradise",
    excerpt: "Discover the stunning coastline where ancient ruins meet crystal-clear waters, offering a perfect blend of history, natural beauty, and relaxation.",
    content: `Turkey's Mediterranean coastline, often called the Turquoise Coast, is a breathtaking stretch of azure waters, hidden coves, and historical treasures. Spanning from Antalya to Fethiye, this region offers a mesmerizing combination of natural beauty and rich historical heritage.

The ancient Lycian civilization once thrived in this region, leaving behind remarkable rock tombs and archaeological sites. Cities like Patara and Xanthos stand as open-air museums, where visitors can walk among ruins that date back thousands of years. The rock tombs of Myra, carved directly into cliff faces, showcase the extraordinary architectural skills of the Lycians.

Sailing is the quintessential way to experience the Turquoise Coast. Traditional wooden gulets, handcrafted sailing boats, offer multi-day cruises that allow travelers to explore secluded bays, swim in crystal-clear waters, and anchor near ancient ruins. Each day brings a new landscape: one moment you're swimming in a hidden cove, the next you're exploring a historical site accessible only by boat.

The town of Kaş epitomizes the region's charm. With its narrow cobblestone streets, bougainvillea-draped houses, and stunning sea views, it offers a perfect blend of traditional Turkish hospitality and Mediterranean lifestyle. Nearby, the sunken city of Kekova provides a unique underwater archaeological experience, where visitors can see the remains of an ancient Lycian settlement submerged by earthquakes.

For nature lovers, the region offers diverse experiences. The Butterfly Valley near Fethiye is a protected natural wonder, home to hundreds of butterfly species. Hiking the Lycian Way, one of the world's most beautiful long-distance walking routes, allows travelers to experience the region's diverse landscapes, from mountain trails to coastal paths.

The Turquoise Coast isn't just a destination; it's a sensory experience that combines natural beauty, historical depth, and the warm hospitality of Turkish culture.`,
    imageUrl: "https://adventurefolio.com/wp-content/uploads/2022/05/Alanya-Turkey-min.png",
    readTime: 5,
    route: "/guide/turquoise-coast"
  },
  {
    id: 4,
    title: "Culinary Journey: The Rich Flavors of Turkish Cuisine",
    excerpt: "Dive into the world of Turkish gastronomy, exploring traditional dishes, regional specialties, and the cultural significance of food in Turkey.",
    content: `Turkish cuisine is a vibrant tapestry of flavors, techniques, and cultural influences that reflect the country's rich historical heritage. Spanning from the Mediterranean to Central Asia, Turkish food is far more than sustenance - it's a storytelling medium that connects generations and regions.

Breakfast in Turkey is an elaborate affair. A typical Turkish breakfast, or "kahvaltı", is a spread of small dishes that can include fresh bread, various cheeses, olives, tomatoes, cucumbers, honey, clotted cream, and multiple types of preserves. Each region adds its unique touch, making breakfast a culinary journey across the country.

Kebabs, perhaps Turkey's most famous culinary export, are far more diverse than most international diners realize. From the tender Adana kebab of southern Turkey to the delicate şiş kebab, each variety tells a story of local ingredients and cooking traditions. In Istanbul and central Anatolia, street vendors and high-end restaurants alike take pride in their unique kebab preparations.

Meze culture represents the social heart of Turkish dining. These small, flavorful dishes are meant to be shared, encouraging conversation and community. From stuffed vine leaves (dolma) to smoky eggplant salads and spicy walnut dips, meze embodies the generous spirit of Turkish hospitality.

Desserts in Turkish cuisine are an art form. Baklava, with its layers of thin pastry, nuts, and sweet syrup, varies by region. In the southeast, pistachio baklava reigns supreme, while in other areas, walnut or almond versions are preferred. Turkish delight (lokum) and künefe, a cheese-based dessert, showcase the complexity of Turkish sweet traditions.

Street food offers another dimension of Turkish culinary experience. Simit (sesame-crusted bread rings), börek (layered pastries), and döner are not just quick meals but cultural institutions. Each bite tells a story of regional ingredients, cooking techniques passed through generations, and the communal spirit of Turkish society.`,
    imageUrl: "https://images.deliveryhero.io/image/fd-tr/LH/fn8c-listing.jpg",
    readTime: 6,
    route: "/guide/culinary-journey"
  },
  {
    id: 5,
    title: "Sustainable Tourism in Turkey: Preserving Natural and Cultural Heritage",
    excerpt: "Explore Turkey's innovative approaches to sustainable tourism, highlighting conservation efforts, eco-friendly initiatives, and responsible travel practices.",
    content: `Sustainable tourism is more than a trend in Turkey - it's a commitment to preserving the country's extraordinary natural and cultural heritage. From the Mediterranean coast to the mountains of Eastern Anatolia, Turkey is developing innovative approaches to responsible travel that protect environments and support local communities.

National parks like Göreme in Cappadocia and Mount Nemrut demonstrate Turkey's dedication to conservation. These sites not only protect unique geological formations and archaeological treasures but also provide sustainable economic opportunities for local communities. Guided tours emphasize minimal environmental impact and cultural respect.

Eco-lodges and sustainable accommodations are transforming Turkey's hospitality landscape. In regions like the Black Sea coast and Central Anatolia, traditional stone houses have been carefully restored as environmentally friendly accommodations. These lodgings use solar energy, practice water conservation, and source food from local organic farms.

Community-based tourism initiatives are empowering rural populations. In villages across Anatolia, travelers can participate in traditional crafts, agricultural activities, and cultural exchanges. These programs provide direct economic benefits to local communities while preserving traditional skills and ways of life.

Sustainable agriculture is another crucial aspect of Turkey's environmental strategy. The country's diverse climate allows for organic farming practices that protect biodiversity. Wine routes in regions like Cappadocia and Thrace showcase how agricultural tourism can support local economies while promoting environmental stewardship.

Marine conservation efforts are particularly notable along the Turkish coast. Programs focused on protecting sea turtle habitats, coral reefs, and marine ecosystems demonstrate a holistic approach to environmental preservation. Responsible diving and boat tour operators play a crucial role in these conservation efforts.

Turkey's approach to sustainable tourism goes beyond environmental considerations. It's about creating meaningful connections between travelers, local communities, and the rich cultural and natural landscapes that make the country unique.`,
    imageUrl: "https://cdn.travelatelier.com/wp-content/uploads/2016/08/sustainable-tourism-development-turkey.jpg",
    readTime: 5,
    route: "/guide/sustainable-tourism"
  }
];

const Guide = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat relative" 
      style={{ 
        backgroundImage: 'url(/images/turkey-flag-map-background.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        opacity: 0.9
      }}
    >
      <div className="absolute inset-0"></div>
      
      <div className="relative z-10">
        <Toolbar />
        
        <div className="container mx-auto px-4 py-12">
          <h1 className="title-3d text-4xl font-bold text-center mb-12 text-gray-800">
            <br />
            Discover Turkey: A Comprehensive Travel Guide
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <motion.div 
                key={post.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(post.route)}
              >
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {post.readTime} min read
                    </span>
                    <button 
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                      onClick={() => navigate(post.route)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guide;
