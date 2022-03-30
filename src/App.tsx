import Header from './components/header/header';
import MainBanner from './components/main-banner/main-banner';
import List from './components/list/list';
import Footer from './components/footer/footer';
import { getBootcampList } from './utils/api/api';
import { Bootcamp } from './utils/interfaces/bootcamp.interface';
import { Filters } from './utils/interfaces/filters.interface';
import { Languages } from './utils/interfaces/languages-flags.interface';
import { useEffect, useState } from 'react';
import Button from './components/button/button';
import { scrollToTop } from './utils/functions/scroll';
import './App.css';

const App = () => {
  const [bootcampList, setBootcampList] = useState<Bootcamp[]>([]);
  const [filters, setfilters] = useState<Filters>({
    text: '',
    price: 0,
    language: '' as Languages,
  });
  const [filteredBootcampList, setFilteredBootcampList] = useState<Bootcamp[]>([]);
  const [bookmarks, setBookmarks] = useState<Bootcamp[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [showToTopButton, setShowToTopButton] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterBootcamps();
  }, [filters]);

  const getData = async () => {
    setLoading(true);
    const data = await getBootcampList();
    setBootcampList(data);
    setFilteredBootcampList(data);
    setLoading(false);
  };

  const filterBootcamps = () => {
    const filteredByText = filterByText(bootcampList);
    const filterdeByPrice = filterByPrice(filteredByText);
    const filteredByLang = filterByLang(filterdeByPrice);

    setFilteredBootcampList(filteredByLang);
  };

  const filterByText = (list: Bootcamp[]): Bootcamp[] => {
    return !!filters.text && filters.text.length >= 2
      ? list.filter(
          (bootcamp) =>
            bootcamp.name.toLowerCase().includes(filters.text.toLowerCase()) ||
            bootcamp.organization.toLowerCase().includes(filters.text.toLowerCase())
        )
      : list;
  };

  const filterByPrice = (list: Bootcamp[]): Bootcamp[] => {
    return !!filters.price ? list.filter((bootcamp) => bootcamp.price <= filters.price) : list;
  };

  const filterByLang = (list: Bootcamp[]): Bootcamp[] => {
    return !!filters.language
      ? list.filter((bootcamp) => bootcamp.languages.includes(filters.language))
      : list;
  };

  const handleFilters = (event: any) => {
    setfilters({ ...filters, [event.target.id]: event.target.value || undefined });
  };

  const handleBookmark = (bootcamp: Bootcamp) => {
    if (bootcamp.bookmark) {
      bootcamp.bookmark = false;
      setBookmarks(bookmarks.filter((bookmark) => bootcamp.id !== bookmark.id));
    } else {
      bootcamp.bookmark = true;
      setBookmarks([bootcamp, ...bookmarks]);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        setShowToTopButton(true);
      } else {
        setShowToTopButton(false);
      }
    });
  }, []);

  return (
    <div className="app-container">
      <Header handleFilters={(e) => handleFilters(e)} />
      <MainBanner />
      {loading ? (
        <div className="loading">Cargando...</div>
      ) : (
        <List list={filteredBootcampList} bookmarks={bookmarks} handleBookmarks={handleBookmark} />
      )}
      {showToTopButton && (
        <Button icon="arrow_upward" onClick={scrollToTop} className="scroll-top"></Button>
      )}
      <Footer />
    </div>
  );
};

export default App;
