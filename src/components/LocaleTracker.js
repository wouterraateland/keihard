import { useTranslation } from "react-i18next";

const LocaleTracker = ({ children }) => {
  useTranslation();
  return children;
};

export default LocaleTracker;
