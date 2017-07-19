import { GET_LETTERS } from '../constants';

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
