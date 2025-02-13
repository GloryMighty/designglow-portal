
import { useEffect } from "react";
import { ArrowDown, Code, Layout, Palette, Send } from "lucide-react";

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

  const skills = [
    { name: "Web Design", icon: <Layout className="w-6 h-6" />, level: 90 },
    { name: "Development", icon: <Code className="w-6 h-6" />, level: 85 },
    { name: "UI/UX Design", icon: <Palette className="w-6 h-6" />, level: 88 },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with seamless user experience",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["React", "TypeScript", "Tailwind"],
    },
    {
      title: "Portfolio Website",
      description: "Clean and minimal portfolio for a professional photographer",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Design", "Next.js", "Animation"],
    },
    {
      title: "Dashboard UI",
      description: "Intuitive dashboard interface with real-time data visualization",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["UI/UX", "React", "Charts"],
    },
  ];

  return (
    <div className="min-h-screen bg-soft-gray">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <span className="text-accent inline-block mb-4 font-medium tracking-wider animate-fade-in">WELCOME TO MY PORTFOLIO</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6 text-soft-black animate-fade-up">
            Crafting Digital
            <br />
            Experiences
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto mb-8 animate-fade-up delay-100">
            Web designer and developer creating beautiful, functional websites with attention to detail and user experience
          </p>
          <ArrowDown className="w-6 h-6 mx-auto mt-12 animate-bounce text-accent" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="p-6 rounded-lg bg-soft-gray animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-4">
                  {skill.icon}
                  <h3 className="text-xl font-medium ml-3">{skill.name}</h3>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-lg animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="text-white text-center p-6">
                    <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                    <p className="text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0">Get in Touch</h2>
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
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-soft-black text-white py-3 rounded-lg hover:bg-accent transition-colors duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
