import * as types from './actionTypes';

const initialState = {
  items: [
    {
      title: 'Spring retention campaign',
      balance: 10000,
    },
    {
      title: 'Punchcard',
      balance: -3000,
    },
    {
      title: 'Loyalty Rewards',
      balance: 500000,
    },
  ],
  showAddModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_OFFER:
      return {
        ...state,
        items: [action.offer, ...state.items],
      };
    case types.TOGGLE_ADD_MODAL:
      return {
        ...state,
        showAddModal: !state.showAddModal,
      };
    default:
      return state;
  }
};

export const getShowAddModal = state => state.offers.showAddModal;
