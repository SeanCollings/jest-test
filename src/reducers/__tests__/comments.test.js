import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('CommentsReducer', () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const action = {
      type: SAVE_COMMENT,
      payload: 'New Comment'
    };

    const newState = commentsReducer([], action);
    expect(newState).toEqual(['New Comment']);
  });

  // Not always useful to test this one
  it('handles action with unknown type', () => {
    const unknownAction = {
      type: 'UNKNOWN'
    };
    const newState = commentsReducer([], unknownAction);
    expect(newState).toEqual([]);
  });
});
