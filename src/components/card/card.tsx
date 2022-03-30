import { Bootcamp } from '../../utils/interfaces/bootcamp.interface';
import { FLAGS, Languages } from '../../utils/interfaces/languages-flags.interface';
import './card.css';

interface CardProps {
  bootcamp: Bootcamp;
  handleBookmark: (bootcamp: Bootcamp) => void;
}

const Card = ({ bootcamp, handleBookmark }: CardProps) => {
  const renderChips = (chips: string[]) => {
    return chips.map((chip, i) => (
      <span className="chip" key={i}>
        {chip}
      </span>
    ));
  };

  const renderLanguages = (languages: Languages[]) => {
    return languages.map((language, i) => {
      return (
        <span className={'flag__container'} key={i}>
          <img className="flag" src={`flags/${FLAGS[language]}.svg`} alt={`${language}`} />
        </span>
      );
    });
  };

  const renderDuration = (bootcamp: Bootcamp) => {
    if (bootcamp.hours) {
      return <span>{bootcamp.hours}h </span>;
    }
    if (bootcamp.weeks) {
      return <span>{bootcamp.weeks}sem </span>;
    }

    if (!bootcamp.hours && !bootcamp.weeks) {
      return <span>--</span>;
    }
  };

  const renderTags = (tags: string[]) => {
    return tags.map((tag, i) => (
      <span className="tag" key={i}>
        {tag}
      </span>
    ));
  };

  return (
    <div className="card__container">
      <div className="card__bookmark">
        <span className="material-icons" onClick={() => handleBookmark(bootcamp)}>
          {bootcamp.bookmark ? 'bookmark' : 'bookmark_border'}
        </span>
      </div>

      <div className="card__subtitle">
        <div>{bootcamp.organization}</div>
        <div>{bootcamp.location}</div>
      </div>

      <div className="card__tags">{renderTags(bootcamp.tags)}</div>
      {bootcamp.url ? (
        <a href={bootcamp.url} target="_blank" rel="noreferrer" className="card__title">
          <h1>
            <span className="material-icons">code_off</span>
            {bootcamp.name}
          </h1>
        </a>
      ) : (
        <h1 className="card__title">
          <span className="material-icons">code_off</span>
          {bootcamp.name}
        </h1>
      )}

      <div className="card__price">
        {bootcamp.price
          ? bootcamp.price.toLocaleString(navigator.language, {
              maximumFractionDigits: 2,
            })
          : '--'}
        €
      </div>

      <div className="card__more-info">
        <div className="card__languages">
          <span className="card__label">Idioma:</span> {renderLanguages(bootcamp.languages)}
        </div>
        <div className="card__duration">
          <span className="card__label">Duración:</span> {renderDuration(bootcamp)}
        </div>
      </div>
      <div className="card__tech">
        <div className="card__label">Tecnologias:</div>
        <div className="card__chips">{renderChips(bootcamp.tech)}</div>
      </div>
    </div>
  );
};

export default Card;
