import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'material-ui/Card';
import Offer from '../Offer';

const offer = {
  id: 'woufsibdonfoskd4',
  title: 'Spring retention campaign',
  balance: 10000,
};

describe(Offer, () => {
  const component = shallow(
    <Offer offer={offer} onDelete={() => {}} />,
  );

  it('should have a card', () => {
    expect(component.find(Card)).toHaveLength(1);
  });
});
