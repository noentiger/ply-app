import * as types from './actionTypes';

const initialState = [
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
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_OFFER:
      return [...state, Object.assign({}, action.offer)];
    default:
      return state;
  }
};
