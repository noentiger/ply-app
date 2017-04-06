import React from 'react';
import { shallow } from 'enzyme';
import TextField from 'material-ui/TextField';
import AddOffer from '../AddOffer';

describe(AddOffer, () => {
  const component = shallow(
    <AddOffer visible addOffer={() => {}} onClose={() => {}} />,
  );

  it('should have two text input fields', () => {
    expect(component.find(TextField)).toHaveLength(2);
  });
});
