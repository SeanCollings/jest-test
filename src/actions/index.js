import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export const saveComment = comment => {
  return { type: SAVE_COMMENT, payload: comment };
};

export const fetchComments = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/comments');

  return { type: FETCH_COMMENTS, payload: res.data };
};
