import { useEffect, useRef, useState } from 'react';
import './DropdownSelection.scss';

interface DropdownSelectionProps {
  children: React.ReactNode;
  title?: string;
}

const DropdownSelection = ({ children, title }: DropdownSelectionProps) => {
  const [isDropdownActive, setIsDropdownActive] = useState(false);
  const dropDownRef = useRef(null);

  useEffect(() => {
    const onClick = (e: any) => {
      if (e.target !== dropDownRef.current) {
        setIsDropdownActive(false);
      }
    };

    document.addEventListener('click', onClick);

    return () => {
      document.removeEventListener('click', onClick);
    };
  }, []);
  return (
    <fieldset className="state__dropdown">
      <button
        onMouseEnter={(e) => {
          e.stopPropagation();
          setIsDropdownActive(true);
        }}
        onMouseLeave={() => setIsDropdownActive(false)}
        className={isDropdownActive ? 'active' : ''}
      >
        <p>{title ? title : 'select category'}</p>
        {isDropdownActive ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </button>
      <div
        className={
          isDropdownActive ? 'dropdown__content open' : 'dropdown__content'
        }
        ref={dropDownRef}
        onMouseEnter={(e) => {
          e.stopPropagation();
          setIsDropdownActive(true);
        }}
        onMouseLeave={() => setIsDropdownActive(false)}
      >
        {children}
      </div>
    </fieldset>
  );
};

export default DropdownSelection;
