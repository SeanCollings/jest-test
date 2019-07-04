import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

describe('CommentBox', () => {
  let wrapped;

  beforeEach(() => {
    // Using mount (full DOM) just to see how it works - usually would use shallow
    // Use Root to send redux store to CommentBox
    wrapped = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  afterEach(() => {
    // Cleanup
    wrapped.unmount();
  });

  it('has a text area and two button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
  });

  describe('the text area', () => {
    beforeEach(() => {
      wrapped.find('textarea').simulate('change', {
        target: { value: 'new comment' }
      });
      // Force component to update
      wrapped.update();
    });

    it('has a text area that users can type in', () => {
      expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('submits the form and clears the text area', () => {
      wrapped.find('form').simulate('submit');
      wrapped.update();
      expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
  });
});
