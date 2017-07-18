import _ from 'lodash';
import { GET_CATEGORIES, GET_LESSONS, POST_LESSON } from '../constants';

export default function(state = {
  lessons: [],
  categories: [],
  vocab: []
}, action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      break;
    case GET_LESSONS:
      let vocab = _.flatten(action.payload.map(lesson => lesson.vocab));
      return {
        ...state,
        lessons: action.payload,
        vocab: vocab
      }
      break;
    default:
      return state;
  }
  return state;
}
