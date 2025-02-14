
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  
  const languages = [
    { code: 'en', name: t('languages.en'), dir: 'ltr' },
    { code: 'tr', name: t('languages.tr'), dir: 'ltr' },
    { code: 'ar', name: t('languages.ar'), dir: 'rtl' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = languages.find(lang => lang.code === lng)?.dir || 'ltr';
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors">
        <Globe className="w-4 h-4" />
        <span>{t(`languages.${i18n.language}`)}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className="cursor-pointer"
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
