import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import enTranslation from './translations/en.json';
import arTranslation from './translations/ar.json';
import trTranslation from './translations/tr.json';

// Initialize i18n with the translation resources and configuration
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
      tr: { translation: trTranslation }
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    ns: ['translation'],
    defaultNS: 'translation'
  });

export default i18n;
