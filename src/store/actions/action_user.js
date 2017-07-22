import { SIGNED_IN } from '../constants';

export function logUser(data) {
  return {
    type: SIGNED_IN,
    payload: data
  }
}
