import { useContext } from 'react';
import './DarkModeToggle.scss';
import { ThemeContext } from '../../context/ThemeContext';

const DarkModeToggle = () => {
  const { dark, toggleDark } = useContext(ThemeContext);

  return (
    <div className={`toggle-btn ${dark ? 'dark' : ''}`}>
      <input
        type="checkbox"
        id="toggle"
        className="checkbox"
        checked={dark}
        onChange={toggleDark}
      />
      <label htmlFor="toggle" className="switch"></label>
    </div>
  );
};

export default DarkModeToggle;
