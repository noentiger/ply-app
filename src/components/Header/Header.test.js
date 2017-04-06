import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

describe(Header, () => {
  const component = shallow(
    <Header />,
  );
  it('should have a header title', () => {
    expect(component.find('.Header-title').text()).toContain('Ply.');
  });
  it('should have a logo img in the Header', () => {
    expect(component.find('img')).toHaveLength(1);
  });
});
