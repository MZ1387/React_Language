import { GET_LETTERS } from '../actions/action_letters';

export default function(state = {
  all: [],
  selectedLetter: null
}, action) {

  switch(action.type) {
    case GET_LETTERS:
      return {
        ...state,
        all: action.payload.data
      }
    default:
      return state;
  }
  return state;
}
