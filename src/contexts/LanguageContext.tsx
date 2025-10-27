import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "@/data/translations";

export type Language = "ko" | "en";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (path: string) => string;
};

const LanguageContext = createContext<I18nContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko");

  useEffect(() => {
    const saved =
      (localStorage.getItem(STORAGE_KEY) as Language | null) ?? "ko";
    setLanguageState(saved === "en" ? "en" : "ko");
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const t = useMemo(() => {
    return (path: string) => {
      const segments = path.split(".");
      let node: any = translations;
      for (const seg of segments) {
        if (node && typeof node === "object" && seg in node) {
          node = node[seg];
        } else {
          return path; // fallback to key
        }
      }
      const value = node as { ko: string; en: string } | string;
      if (typeof value === "string") return value;
      return value[language] ?? value.ko ?? path;
    };
  }, [language]);

  const value: I18nContextValue = useMemo(
    () => ({ language, setLanguage, t }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}



