import { GET_CATEGORIES, GET_LESSONS } from '../actions/action_lessons';

export default function(state = {
  lessons: [],
  categories: []
}, action) {

  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.data
      }
      break;
    case GET_LESSONS:
      return {
        ...state,
        lessons: action.payload.data
      }
    default:
      return state;
  }
  return state;
}
