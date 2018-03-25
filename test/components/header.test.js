import React from 'react';
import renderer from 'react-test-renderer';

import Header from './../../src/component/Header/index';

test('Footer component', () => {
  const component = renderer.create(
    <Header />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
