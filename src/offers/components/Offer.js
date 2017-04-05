import React, {PropTypes} from 'react';

const Offer = ({offer}) => {
  return (
    <div>
      {offer.title}, {offer.balance}
    </div>
  );
};

Offer.propTypes = {
  offer: PropTypes.object.isRequired
};

export default Offer;
