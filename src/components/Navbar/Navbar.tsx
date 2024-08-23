// import { NavLink } from 'react-router-dom';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './Navbar.scss';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  return (
    <nav className={scrollPosition > 0 ? 'nav active dark-mode' : 'nav'}>
      <h2 className="nav__logo">
        <a href="/">
          Jobi<span>fy</span>
        </a>
      </h2>
      <div className="nav__search">
        <input
          type="text"
          className="search__input"
          placeholder="Search for jobs"
        />
      </div>
      <div className="menu">
        <a href="/" className="menu__btn">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
