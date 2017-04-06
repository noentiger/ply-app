import * as types from './actionTypes';

const initialState = {
  items: [
    {
      id: 'woufsibdonfoskd4',
      title: 'Spring retention campaign',
      balance: 10000,
    },
    {
      id: 'w04fnspdifnonifrs',
      title: 'Punchcard',
      balance: -3000,
    },
    {
      id: '9n4fw0sdfiosdf',
      title: 'Loyalty Rewards',
      balance: 500000,
    },
  ],
  showAddModal: false,
  selectedFilter: 'all',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_OFFER:
      return {
        ...state,
        items: [action.offer, ...state.items],
      };
    case types.DELETE_OFFER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id),
      };
    case types.TOGGLE_ADD_MODAL:
      return {
        ...state,
        showAddModal: !state.showAddModal,
      };
    case types.CHANGE_FILTER:
      return {
        ...state,
        selectedFilter: action.filter,
      };
    default:
      return state;
  }
};

export const getShowAddModal = state => state.offers.showAddModal;
export const getSelectedFilter = state => state.offers.selectedFilter;
