import { GET_CARDS } from '../constants';

export function getCards(data) {

  return {
    type: GET_CARDS,
    payload: data
  }
}
