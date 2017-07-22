import { SIGNED_IN } from '../constants';

export default function (state = {
  user:{}
}, action) {
  switch (action.type) {
    case SIGNED_IN:
      return {
        ...state,
        user: action.payload
      }
      break;
    default:
      return state;
  }
  return state;
}
