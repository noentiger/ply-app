import * as types from './actionTypes';

export const addOffer = offer => ({
  type: types.ADD_OFFER,
  offer,
});

export const deleteOffer = id => ({
  type: types.DELETE_OFFER,
  id,
});

export const toggleAddModal = () => ({
  type: types.TOGGLE_ADD_MODAL,
});

export const changeFilter = filter => ({
  type: types.CHANGE_FILTER,
  filter,
});
