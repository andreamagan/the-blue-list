import { useState } from 'react';
import { FLAGS, Languages } from '../../utils/interfaces/languages-flags.interface';
import './lang-select.css';

interface LangSelectProps {
  handleFilters: (e: any) => void;
}

const LangSelect = ({ handleFilters }: LangSelectProps) => {
  const [lang, setLang] = useState<Languages | null>(null);
  const [optionsVisibles, setOptionsVisibles] = useState<boolean>(false);

  const changeLang = (newLang: Languages | null) => {
    setLang(newLang);
    const event = {
      target: {
        id: 'language',
        value: newLang,
      },
    };
    handleFilters(event);
    setOptionsVisibles(false);
  };

  return (
    <div className="lang-select__container">
      <span onClick={() => setOptionsVisibles(!optionsVisibles)}>{lang || 'Idioma'}</span>
      {optionsVisibles && (
        <ul className="lang-select__options">
          <li onClick={() => changeLang(null)}>Todos</li>
          <li onClick={() => changeLang(Languages.Spanish)}>
            <img className="flag" src={`flags/${FLAGS.Spanish}.svg`} alt="lang" />
          </li>
          <li onClick={() => changeLang(Languages.English)}>
            <img className="flag" src={`flags/${FLAGS.English}.svg`} alt="lang" />
          </li>
          <li onClick={() => changeLang(Languages.French)}>
            <img className="flag" src={`flags/${FLAGS.French}.svg`} alt="lang" />
          </li>
          <li onClick={() => changeLang(Languages.German)}>
            <img className="flag" src={`flags/${FLAGS.German}.svg`} alt="lang" />
          </li>
        </ul>
      )}
    </div>
  );
};

export default LangSelect;
