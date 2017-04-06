import * as actions from './actions';
import * as types from './actionTypes';
import reducer from './reducer';

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
  selectedFilter: 'all',
};

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe('actions', () => {
  it('should create an action to add an offer', () => {
    const offer = {
      title: 'Foo',
      balance: 20004,
    };
    const expectedAction = {
      type: types.ADD_OFFER,
      offer,
    };
    expect(actions.addOffer(offer)).toEqual(expectedAction);
  });
  it('should open the new offer modal', () => {
    expect(reducer(undefined, {
      type: 'TOGGLE_ADD_MODAL',
      showAddModal: false,
    })).toEqual({
      ...initialState,
      showAddModal: true,
    });
  });
  it('should select correct filter', () => {
    expect(reducer(undefined, {
      type: 'CHANGE_FILTER',
      filter: 'negative',
    })).toEqual({
      ...initialState,
      selectedFilter: 'negative',
    });
  });
});
