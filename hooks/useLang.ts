'use client'

import { $lang } from "@/context/lang";
import { useUnit } from "effector-react";
import translationsJson from "@/public/translations/translation.json";

const useLang = () => {
  const lang = useUnit($lang);
  const translations = translationsJson;

  return { lang, translations };
};

export default useLang;
