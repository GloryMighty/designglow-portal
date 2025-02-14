import { useEffect } from "react";
import { Camera, Globe, MapPin, Utensils, Calendar, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import LanguageSelector from "../components/LanguageSelector";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
          entry.target.classList.remove("opacity-0");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const destinations = [
    {
      title: "Istanbul",
      description: "Where East meets West, ancient meets modern",
      image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b",
      tags: ["Historical", "Cultural", "Urban"],
    },
    {
      title: "Cappadocia",
      description: "Magical landscapes and hot air balloon adventures",
      image: "https://images.unsplash.com/photo-1570854009466-78800d0c743a",
      tags: ["Nature", "Adventure", "Unique"],
    },
    {
      title: "Antalya",
      description: "Mediterranean paradise with pristine beaches",
      image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989",
      tags: ["Beach", "Luxury", "Resort"],
    },
  ];

  const experiences = [
    { name: "Cultural Tours", icon: <Globe className="w-6 h-6" />, description: "Guided explorations of historical sites" },
    { name: "Photography", icon: <Camera className="w-6 h-6" />, description: "Capture breathtaking Turkish landscapes" },
    { name: "Culinary", icon: <Utensils className="w-6 h-6" />, description: "Traditional Turkish cuisine experiences" },
  ];

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1524231757912-21f4fe3a7200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute top-4 right-4 z-20">
          <LanguageSelector />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-accent inline-block mb-4 font-medium tracking-wider animate-fade-in">WELCOME TO TURKEY</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6 text-white animate-fade-up">
            Discover the Land of
            <br />
            Endless Beauty
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto mb-8 animate-fade-up delay-100">
            Experience the magic of Turkey: where ancient history meets modern culture, and every moment becomes an unforgettable memory
          </p>
          <MapPin className="w-6 h-6 mx-auto mt-12 animate-bounce text-accent" />
        </div>
      </section>

      {/* Destinations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {destinations.map((destination, index) => (
              <Link
                to={`/destination/${destination.title.toLowerCase()}`}
                key={destination.title}
                className="group relative overflow-hidden rounded-lg animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-2xl font-playfair mb-2">{destination.title}</h3>
                    <p className="text-sm mb-4">{destination.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {destination.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-accent rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Cultural Experiences</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div
                key={experience.name}
                className="p-8 rounded-lg bg-white shadow-lg animate-on-scroll opacity-0 hover:transform hover:-translate-y-2 transition-transform duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-6 text-accent">
                  {experience.icon}
                </div>
                <h3 className="text-xl font-playfair text-center mb-4">{experience.name}</h3>
                <p className="text-gray-600 text-center">{experience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Guide Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Travel Guide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0">
              <Calendar className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-playfair mb-4">Best Time to Visit</h3>
              <p className="text-gray-600">
                Spring (April-May) and Autumn (September-November) offer mild weather perfect for exploring both historical sites and natural wonders.
              </p>
            </div>
            <div className="animate-on-scroll opacity-0 delay-100">
              <Globe className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-xl font-playfair mb-4">Getting Around</h3>
              <p className="text-gray-600">
                Turkey offers excellent transportation options including domestic flights, high-speed trains, and comfortable buses connecting major cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-soft-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Plan Your Journey</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6 animate-on-scroll opacity-0">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <textarea
                  placeholder="Tell us about your dream Turkish adventure"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-accent text-white py-3 rounded-lg hover:bg-soft-black transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Inquiry
                <Phone className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600 bg-white">
        <p>&copy; {new Date().getFullYear()} Turkish Tourism. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
