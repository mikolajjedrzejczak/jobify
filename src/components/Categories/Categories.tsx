import { useContext } from 'react';
import './Categories.scss';
import DropdownSelection from '../DropdownSelection/DropdownSelection';
import { ThemeContext } from '../../context/ThemeContext';

const Categories = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section className={dark ? 'categories dark-mode' : 'categories'}>
      <div className="container">
        <DropdownSelection title="Category">
          <div>
            <input type="checkbox" id="category1" />
            <label htmlFor="category1">Category 1</label>
          </div>
        </DropdownSelection>
        <DropdownSelection title="Type of contract">
          <div>
            <input type="checkbox" id="category2" />
            <label htmlFor="category2">Category 2</label>
          </div>
        </DropdownSelection>
        <DropdownSelection title="City">
          <div>
            <input type="checkbox" id="category5" />
            <label htmlFor="category5">Category 5</label>
          </div>
          <div>
            <input type="checkbox" id="category4" />
            <label htmlFor="category4">Category 4</label>
          </div>
        </DropdownSelection>
      </div>
    </section>
  );
};

export default Categories;
