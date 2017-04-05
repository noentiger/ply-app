import React, { PropTypes } from 'react';

const Offer = ({ offer }) => (
  <div>
    {offer.title}, {offer.balance}
  </div>
  );

Offer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    balance: PropTypes.number,
  }).isRequired,
};

export default Offer;
