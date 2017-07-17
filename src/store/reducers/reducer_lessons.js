import { GET_CATEGORIES, GET_LESSONS, POST_LESSON } from '../constants';

export default function(state = {
  lessons: [],
  categories: []
}, action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }
      break;
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}
