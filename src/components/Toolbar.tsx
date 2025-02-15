import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { cn } from "@/lib/utils";
import "../styles/LogoTitle3D.css";
import "../styles/Font3D.css";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Toolbar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      href: "/destinations", 
      label: t("toolbar.navItems.destinations"),
      color: "text-[#808000]",
      borderColor: "border-[#808000]" 
    },
    { 
      href: "/experiences", 
      label: t("toolbar.navItems.experiences"),
      color: "text-[#808000]",
      borderColor: "border-[#808000]" 
    },
    { 
      href: "/guide", 
      label: t("toolbar.navItems.guide"),
      color: "text-[#808000]",
      borderColor: "border-[#808000]" 
    },
    { 
      href: "/contact", 
      label: t("toolbar.navItems.contact"),
      color: "text-[#808000]",
      borderColor: "border-[#808000]" 
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 text-white bg-white/80 backdrop-blur-md shadow-sm",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl md:text-3xl font-playfair text-accent hover:text-accent/10 transition-colors title-3d">
            {t("toolbar.title")}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                to={item.href}
                className={`
                  text-lg hover:text-accent transition-colors three-d-title ${item.color} 
                  border-b-2 hover:border-opacity-100 
                  ${item.borderColor} 
                  border-opacity-50 pb-1
                `}
                style={{ 
                  fontSize: '1rem', 
                  textShadow: '0.5px 0.5px 0 rgba(0, 0, 0, 0.1)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Language Selector */}
          <div className="hidden md:block">
            <LanguageSelector />
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            {!isMobileMenuOpen && (
              <button 
                onClick={toggleMobileMenu} 
                className="text-soft-black hover:text-accent transition-colors"
                aria-label="Toggle mobile menu"
              >
                <Menu size={24} />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-40">
            <div className="relative h-full">
              {/* Close Button */}
              <button 
                onClick={toggleMobileMenu} 
                className="absolute top-4 right-4 text-soft-black hover:text-accent transition-colors z-50 bg-white p-2 rounded-full shadow-md"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-4 p-4 pt-16 h-full">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className={`
                      text-lg hover:text-accent transition-colors 
                      block py-3 text-center bg-white rounded-lg 
                      shadow-sm three-d-title ${item.color}
                      border-2 ${item.borderColor} border-opacity-50 
                      hover:border-opacity-100
                    `}
                    style={{ 
                      fontSize: '1.125rem', 
                      textShadow: '0.5px 0.5px 0 rgba(0, 0, 0, 0.1)' 
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toolbar;
