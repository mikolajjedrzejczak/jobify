import { useContext } from 'react';
import Navbar from './components/Navbar/Navbar';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { dark } = useContext(ThemeContext);

  console.log(dark);
  return (
    <div className={dark ? 'container dark-mode' : 'container'}>
      <Navbar />
    </div>
  );
};

export default App;
