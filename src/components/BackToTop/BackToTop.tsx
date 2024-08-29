import { useScrollPosition } from '../../hooks/useScrollPosition';
import './BackToTop.scss';

const BackToTop = () => {
  const position = useScrollPosition();
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <button
      className={position > 300 ? 'back-to-top active' : 'back-to-top'}
      onClick={handleBackToTop}
    >
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
    </button>
  );
};

export default BackToTop;
