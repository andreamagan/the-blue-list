import LangSelect from '../lang-select/lang-select';
import './search-bar.css';

interface SearchProps {
  handleFilters: (e: any) => void;
}

const Search = ({ handleFilters }: SearchProps) => {
  return (
    <div className="search__container">
      <div className="search__input__container">
        <input
          type="text"
          id="text"
          autoComplete="off"
          className="search__text"
          onChange={(e) => handleFilters(e)}
          placeholder="Full stack"
        />
      </div>

      <div className="search__input__container">
        <label htmlFor="price">Hasta</label>
        <input
          type="number"
          id="price"
          className="search__price"
          onChange={(e) => handleFilters(e)}
        />
        <span>€</span>
      </div>

      <div className="search__input__container">
        <LangSelect handleFilters={handleFilters} />
      </div>
    </div>
  );
};

export default Search;
