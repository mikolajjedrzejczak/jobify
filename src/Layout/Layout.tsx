import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import BackToTop from '../components/BackToTop/BackToTop';

const Layout = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className={dark ? 'container dark-mode' : 'container'}>
      <Navbar />
      <Outlet />
      <BackToTop />
    </div>
  );
};

export default Layout;
