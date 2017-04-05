import React, { PropTypes } from 'react';
import Offer from './Offer';

const OffersList = ({ offers }) => (
  <div>
    {offers.map(offer =>
      <Offer key={offer.title} offer={offer} />,
      )}
  </div>
  );

OffersList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offers: PropTypes.array.isRequired,
};

export default OffersList;
