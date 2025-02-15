import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { cn } from "@/lib/utils";
import "../styles/LogoTitle3D.css";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for mobile menu

const Toolbar = ({ className }: { className?: string }) => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/destinations", label: t("toolbar.navItems.destinations") },
    { href: "/experiences", label: t("toolbar.navItems.experiences") },
    { href: "/guide", label: t("toolbar.navItems.guide") },
    { href: "/contact", label: t("toolbar.navItems.contact") },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm",
      className
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-playfair text-accent hover:text-accent/80 transition-colors title-3d">
            {t("toolbar.title")}
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="text-soft-black text-sm hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
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
          
          <LanguageSelector />
        </div>

        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white/95 z-40">
            <div className="relative h-full">
              {/* Close Button */}
              <button 
                onClick={toggleMobileMenu} 
                className="absolute top-4 right-4 text-soft-black hover:text-accent transition-colors z-50"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col space-y-4 p-4 pt-16 h-full">
                <div className="mb-4 flex justify-center">
                  <LanguageSelector />
                </div>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={toggleMobileMenu}
                    className="text-soft-black text-lg hover:text-accent transition-colors block py-2 text-center"
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
