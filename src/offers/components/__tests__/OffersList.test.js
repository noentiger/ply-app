import React from 'react';
import { shallow } from 'enzyme';
import OffersList from '../OffersList';
import Offer from '../Offer';

const offers = [
  {
    id: 'woufsibdonfoskd4',
    title: 'Spring retention campaign',
    balance: 10000,
    tags: ['Ale'],
  },
  {
    id: 'w04fnspdifnonifrs',
    title: 'Punchcard',
    balance: -3000,
    tags: ['Fail'],
  },
];

describe(OffersList, () => {
  const component = shallow(
    <OffersList offers={offers} onDelete={() => {}} onDeleteTag={() => {}} />,
  );

  it('should have two offers in the list', () => {
    expect(component.find(Offer)).toHaveLength(2);
  });
});
