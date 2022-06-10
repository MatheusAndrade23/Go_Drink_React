import * as Styled from './styles';

import { useTranslation } from 'react-i18next';

import flags from 'flag-icons';
import { useEffect, useState } from 'react';

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const recoveredLanguage = localStorage.getItem('language');

    if (recoveredLanguage) {
      i18n.changeLanguage(recoveredLanguage);
    }
  }, [i18n]);

  const changeLanguage = (key) => {
    i18n.changeLanguage(key);
    localStorage.setItem('language', key);
  };
  return (
    <Styled.Container>
      {LanguageOptions.map((language) => (
        <button
          key={language.key}
          onClick={() => {
            changeLanguage(language.key);
          }}
        >
          <span className={language.flag}></span>
        </button>
      ))}
    </Styled.Container>
  );
};

const LanguageOptions = [
  {
    name: 'Português',
    key: 'ptBr',
    flag: 'fi fi-br fis',
  },
  {
    name: 'English',
    key: 'en',
    flag: 'fi fi-us fis',
  },
];
