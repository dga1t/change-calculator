import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en.json';
import ja from './ja.json';

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ja',
    resources: {
      en: { translation: en },
      ja: { translation: ja },
      ns: ['translation'],
      defaultNS: 'translation',
      interpolation: {
        escapeValue: false, // not needed for react
      },
      react: {
        wait: true,
        bindI18n: 'languageChanged loaded',
      },
    },
  });

export default i18n;