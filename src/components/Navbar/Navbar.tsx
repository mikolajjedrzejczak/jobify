
import { useContext } from 'react';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import './Navbar.scss';
import { ThemeContext } from '../../context/ThemeContext';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  const scrollPosition = useScrollPosition();
  const { dark } = useContext(ThemeContext);

  const navStyles = () => {
    if (scrollPosition > 0) {
      if (dark) {
        return 'nav active dark-mode';
      } else {
        return 'nav active';
      }
    } else {
      if (dark) {
        return 'nav dark-mode';
      } else {
        return 'nav';
      }
    }
  };

  return (
    <nav className={navStyles()}>
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
        <DarkModeToggle />
        <a href="/" className="menu__btn">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
