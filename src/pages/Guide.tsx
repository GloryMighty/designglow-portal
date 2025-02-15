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

const Guide: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: t('travelGuide.blogPosts.cappadocia.title'),
      excerpt: t('travelGuide.blogPosts.cappadocia.excerpt'),
      content: t('travelGuide.blogPosts.cappadocia.content'),
      imageUrl: "https://www.dailycappadociatour.com/wp-content/uploads/slider4/2-dias-1-noche-capadocia-tour.jpg",
      readTime: 5,
      route: "/guide/cappadocia"
    },
    {
      id: 2,
      title: t('travelGuide.blogPosts.istanbul.title'),
      excerpt: t('travelGuide.blogPosts.istanbul.excerpt'),
      content: t('travelGuide.blogPosts.istanbul.content'),
      imageUrl: "https://cdnuploads.aa.com.tr/uploads/Contents/2024/05/03/thumbs_b_c_d09ebaa48d4181a43c143f53b35bcba0.jpg?v=112927",
      readTime: 6,
      route: "/guide/istanbul"
    },
    {
      id: 3,
      title: t('travelGuide.blogPosts.turquoiseCoast.title'),
      excerpt: t('travelGuide.blogPosts.turquoiseCoast.excerpt'),
      content: t('travelGuide.blogPosts.turquoiseCoast.content'),
      imageUrl: "https://adventurefolio.com/wp-content/uploads/2022/05/Alanya-Turkey-min.png",
      readTime: 5,
      route: "/guide/turquoise-coast"
    },
    {
      id: 4,
      title: t('travelGuide.blogPosts.culinaryJourney.title'),
      excerpt: t('travelGuide.blogPosts.culinaryJourney.excerpt'),
      content: t('travelGuide.blogPosts.culinaryJourney.content'),
      imageUrl: "https://images.deliveryhero.io/image/fd-tr/LH/fn8c-listing.jpg",
      readTime: 6,
      route: "/guide/culinary-journey"
    },
    {
      id: 5,
      title: t('travelGuide.blogPosts.sustainableTourism.title'),
      excerpt: t('travelGuide.blogPosts.sustainableTourism.excerpt'),
      content: t('travelGuide.blogPosts.sustainableTourism.content'),
      imageUrl: "https://cdn.travelatelier.com/wp-content/uploads/2016/08/sustainable-tourism-development-turkey.jpg",
      readTime: 5,
      route: "/guide/sustainable-tourism"
    }
  ];

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
