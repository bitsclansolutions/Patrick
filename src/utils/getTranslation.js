import { translations } from "../Pages/Constants/headerText";

export const getTranslation = (key, isDutch) => {
    const language = isDutch ? "nl" : "en";
    return translations[language][key] || key;
  };
  