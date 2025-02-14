import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Calendar, Info } from "lucide-react";
import React from "react";

// This component provides a common layout for destination detail pages.
// It accepts props for title, subtitle, description, highlights, image, bestTime, and tips.

interface DestinationLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  bestTime: string;
  tips: string;
}

const DestinationLayout = (props: DestinationLayoutProps) => {
  const { title, subtitle, description, highlights, image, bestTime, tips } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 animate-fade-up">
              {title}
            </h1>
            <p className="text-xl animate-fade-up delay-100">{subtitle}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center text-accent hover:text-soft-black transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="animate-fade-up">
              <h2 className="text-2xl font-playfair mb-6">About</h2>
              <p className="text-gray-600 leading-relaxed mb-8">{description}</p>
              <div className="space-y-4">
                {highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <MapPin className="w-5 h-5 text-accent mr-3" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8 animate-fade-up delay-100">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Calendar className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl font-playfair mb-3">Best Time to Visit</h3>
                <p className="text-gray-600">{bestTime}</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Info className="w-6 h-6 text-accent mb-4" />
                <h3 className="text-xl font-playfair mb-3">Local Tips</h3>
                <p className="text-gray-600">{tips}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationLayout;
