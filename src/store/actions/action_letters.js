import { GET_LETTERS } from '../constants';

export function getLetters(data) {
  return {
    type: GET_LETTERS,
    payload: data
  }
}
