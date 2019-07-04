import React from 'react';
import { mount } from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

describe('CommentList', () => {
  let wrapped;
  const comments = ['Comment 1', 'Comment 2'];

  beforeEach(() => {
    // Set intialstate in Redux to test against
    const initialState = {
      comments
    };

    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('create one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows the text for each comment', () => {
    expect(wrapped.render().text()).toContain(comments[0]);
    expect(wrapped.render().text()).toContain(comments[1]);
  });
});
