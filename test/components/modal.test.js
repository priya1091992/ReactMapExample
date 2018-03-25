import React from 'react';
import renderer from 'react-test-renderer';

import Modal from './../../src/component/Modal/index';

test('Modal component', () => {
  const component = renderer.create(
    <Modal
      show={true}
      onClose={() => {}}
      onSubmit={() => {}}
    >
      <div>Modal</div>
    </Modal>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
