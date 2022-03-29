import { Bootcamp } from '../../utils/interfaces/bootcamp.interface';
import Card from '../card/card';
import './list.css';

interface ListProps {
  list: Bootcamp[];
  handleBookmarks: (bootcamp: Bootcamp) => void;
  bookmarks: Bootcamp[];
}

const List = ({ list, bookmarks, handleBookmarks }: ListProps) => {
  return (
    <section className="list__container">
      <div className="bookmarks__container">
        <h1 className="bookmarks__title">
          <span className="material-icons">bookmark_added</span>
          Guardados
        </h1>
        {bookmarks.length ? (
          <div className="list__content">
            {bookmarks.map((bootcamp, i) => (
              <Card bootcamp={bootcamp} key={i} handleBookmark={handleBookmarks} />
            ))}
          </div>
        ) : (
          <div className="bookmarks__no-data">Aun no has guardado nada</div>
        )}
      </div>

      {list.length ? (
        <div className="list__content">
          {list.map((bootcamp, i) => (
            <Card bootcamp={bootcamp} key={i} handleBookmark={handleBookmarks} />
          ))}
        </div>
      ) : (
        <div className="list__no-data">
          <div className="list__no-data__icon">¯\_( ❛ ₒ ❛ )_/¯</div>
          <h1>No hemos encontrado nada</h1>
        </div>
      )}
    </section>
  );
};

export default List;
