import * as types from './actionTypes';

export const addOffer = (offer) => {
  return {
    type: types.ADD_OFFER,
    offer
  };
}
