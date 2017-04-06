import React from 'react';
import { shallow } from 'enzyme';
import MenuItem from 'material-ui/MenuItem';
import Filter from '../Filter';

describe(Filter, () => {
  const component = shallow(
    <Filter selected="all" onFilter={() => {}} />,
  );

  it('should have three menu items', () => {
    expect(component.find(MenuItem)).toHaveLength(3);
  });
});
