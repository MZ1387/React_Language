import { GET_CATEGORIES, GET_LESSONS } from '../actions/action_lessons';

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
