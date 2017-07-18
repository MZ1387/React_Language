import { GET_CARDS } from '../constants';

export default function(state = {
  all:[],
  selectedCard: null
}, action) {

  switch(action.type) {
    case GET_CARDS:
      return {...state, all:action.payload.data}
    default:
      return state;
  }
  return state;
}
