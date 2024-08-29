import './ListOfOffers.scss';
import SingleOffer from './SingleOffer/SingleOffer';

const ListOfOffers = () => {
  return (
    <section className="list-of-offers">
      <div className="container">
      <SingleOffer />
      <SingleOffer />
      <SingleOffer />
      <SingleOffer />
      <SingleOffer />
      </div>
    </section>
  );
};

export default ListOfOffers;
