import { createContext, useContext, useState, useEffect } from "react";
import { DICTIONARY } from "../components/static";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState(() => {
        return localStorage.getItem("portfolio_lang") || "en";
    });

    useEffect(() => {
        localStorage.setItem("portfolio_lang", locale);
    }, [locale]);

    const toggleLanguage = () => {
        setLocale((prev) => (prev === "en" ? "id" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ locale, data: DICTIONARY[locale], toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};