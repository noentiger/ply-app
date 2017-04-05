import React, {PropTypes} from 'react';
import Offer from './Offer';

const OffersList = ({offers}) => {
  return (
    <div>
      {offers.map((offer) =>
        <Offer key={offer.title} offer={offer} />
      )}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.array.isRequired
};

export default OffersList;
