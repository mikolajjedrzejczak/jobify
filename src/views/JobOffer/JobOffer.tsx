
import { useParams } from 'react-router-dom';

const JobOffer = () => {
  const offerId = useParams().id;

  return <div>JobOffer {offerId} </div>;
};

export default JobOffer;
