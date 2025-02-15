import { Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const ContactSection = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailRedirect = () => {
    const recipientEmail = 'vimawebsolutions@gmail.com';
    const subject = `Inquiry from ${name}`;

    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}}`;
    window.location.href = mailtoLink;
  };

  return (
    <section 
      className="py-20 bg-soft-gray relative" 
      style={{
        backgroundImage: `url('https://media.restless.co.uk/uploads/2024/05/kas.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
    >
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-16 animate-on-scroll opacity-100 title-3d text-white">
          {t("contact.title")}
        </h2>
        <div className="max-w-lg mx-auto">
          <form className="space-y-6 animate-on-scroll opacity-90">
            <div>
              <input
                type="text"
                placeholder={t("contact.namePlaceholder")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors bg-white/90"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder={t("contact.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors bg-white/90"
              />
            </div>
            <div>
              <textarea
                placeholder={t("contact.messagePlaceholder")}
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-accent transition-colors bg-white/90"
              />
            </div>
            <button
              type="button"
              onClick={handleEmailRedirect}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-soft-black transition-colors duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus:outline-accent"
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
