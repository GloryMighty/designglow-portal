import { useTranslation } from "react-i18next";
import Toolbar from "../components/Toolbar";
import ContactSection from "../components/sections/ContactSection";
import "../styles/LogoTitle3D.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-soft-gray pt-16">
      <Toolbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-12 title-3d">
          {t("contact.title")}
        </h1>
        <ContactSection />
      </div>
    </div>
  );
};

export default Contact;
