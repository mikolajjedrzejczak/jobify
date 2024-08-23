import Navbar from './components/Navbar/Navbar';
import { useScrollPosition } from './hooks/useScrollPosition';

const App = () => {
  const scrollPosition = useScrollPosition();
  return (
    <div className={scrollPosition > 0 ? 'container dark-mode' : 'container'}>
      <Navbar />
    </div>
  );
};

export default App;
