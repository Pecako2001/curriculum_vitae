"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "../src/i18n";
import { useEffect } from "react";

export default function I18nClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cv-lang");
      if (stored && stored !== i18n.language) {
        i18n.changeLanguage(stored);
      }

      const handleChange = (lng: string) => {
        localStorage.setItem("cv-lang", lng);
      };

      i18n.on("languageChanged", handleChange);
      return () => {
        i18n.off("languageChanged", handleChange);
      };
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
