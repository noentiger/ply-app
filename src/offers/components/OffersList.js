import React, { PropTypes } from 'react';
import { Grid, Row } from 'react-app-flexbox-grid/lib';
import Offer from './Offer';

const OffersList = ({ offers, onDelete, onDeleteTag }) => (
  <Grid fluid>
    <Row around="xs">
      {offers.map(offer =>
        <Offer
          key={offer.id}
          offer={offer}
          onDelete={() => onDelete(offer.id)}
          onDeleteTag={(tag) => {
            onDeleteTag(tag, offer.id);
          }}
        />,
        )}
    </Row>
  </Grid>
  );

OffersList.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  offers: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  onDeleteTag: PropTypes.func.isRequired,
};

export default OffersList;
