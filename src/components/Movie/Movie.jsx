import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './Movie.module.css';

const Movie = ({ films }) => {
  const locatioRender = useLocation();
  return (
    <>
      {
    <ul className={css.HomeList}>
          {films.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`} state={locatioRender} className={css.HomeLink}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      }
    </>
  );
};

Movie.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};

export default Movie;