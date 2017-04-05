import * as actions from './actions'
import * as types from './actionTypes'
import reducer from './reducer';

describe('actions', () => {
  it('should create an action to add an offer', () => {
    const offer = {
      title: 'Foo',
      balance: 20004,
    };
    const expectedAction = {
      type: types.ADD_OFFER,
      offer
    }
    expect(actions.addOffer(offer)).toEqual(expectedAction)
  })
})

describe('reducer', function() {
  it('should return the initial state', function() {
    expect(reducer(undefined, {})).toEqual(
      [
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
  );
  });
});
