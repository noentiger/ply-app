import * as types from './actionTypes';

export const addOffer = offer => ({
  type: types.ADD_OFFER,
  offer,
});

export const toggleAddModal = () => ({
  type: types.TOGGLE_ADD_MODAL,
});
