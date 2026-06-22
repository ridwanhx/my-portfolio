import { createContext, useContext, useState, useEffect } from "react";
import { DICTIONARY } from "../components/static";
import { useParams } from "react-router-dom";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    // inisialisasi role
    const { role } = useParams();
    // inisialisasi role saat ini, tentukan nilai defaultnya "dev"
    const currentRole = ["dev", "sys"].includes(role) ? role : "dev";

    // inisialisasi state
    // set locale
    const [locale, setLocale] = useState(() => {
        return localStorage.getItem("portfolio_lang") || "en";
    });

    useEffect(() => {
        localStorage.setItem("portfolio_lang", locale);
    }, [locale]);

    const toggleLanguage = () => {
        setLocale((prev) => (prev === "en" ? "id" : "en"));
    };

    const rawData = DICTIONARY[locale];
    const filteredData = Object.keys(rawData).reduce((acc, key) => {
        acc[key] = rawData[key][currentRole] || rawData[key];
        return acc;
    }, {});

    return (
        <LanguageContext.Provider value={{ locale, data: filteredData, toggleLanguage, role: currentRole }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
    return context;
};