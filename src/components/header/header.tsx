import { scrollToTop } from '../../utils/functions/scroll';
import Search from '../search-bar/search-bar';
import './header.css';

interface HeaderProps {
  handleFilters: (e: any) => void;
}

const Header = ({ handleFilters }: HeaderProps) => {
  return (
    <header className="header__container">
      <div className="header__logo" onClick={() => scrollToTop()}>
        <span className="material-icons">code_off</span> The 'Blue' List
      </div>
      <Search handleFilters={handleFilters} />
    </header>
  );
};

export default Header;
