import './SingleOffer.scss';

const SingleOffer = () => {
  return (
    <div className="single-offer">
      <div className="wrapper">
        <div className="single-offer__header">
          <div className="single-offer__image">
            <img src="https://via.placeholder.com/150" alt="Offer" />
          </div>
          <div>
            <h2>Offer Title</h2>
            <p>Lorem1234</p>
          </div>
        </div>
        <div className="single-offer__content">
          <div className="single-offer__details">
            <p>Offer Details</p>
            <p>Offer Details</p>
            <p>Offer Details</p>
            <p>Offer Details</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleOffer;
