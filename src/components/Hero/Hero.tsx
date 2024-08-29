import { useContext } from 'react';
import HeroImage from '../../assets/undraw_work_time_re_hdyv(x2).svg';
import './Hero.scss';
import { ThemeContext } from '../../context/ThemeContext';

const Hero = () => {
  const { dark } = useContext(ThemeContext);
  return (
    <section className={dark ? 'hero' : 'hero dark-mode'}>
      <div className="hero__content">
        <h1 className="hero__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h1>
        <p className="hero__text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <button className="hero__btn">start</button>
      </div>
      <div className="hero__image">
        <img src={HeroImage} alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
