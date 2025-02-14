import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-soft-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-0 three-d-title">
          {t("contact.title")}
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6 animate-on-scroll opacity-0">
            <div>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-white py-3 rounded-lg hover:bg-soft-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              {t("contact.submit")}
              <Phone className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
