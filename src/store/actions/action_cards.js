import axios from 'axios';
import '../../stubs/index';

export const GET_CARDS = 'GET_CARDS';

export function getCards() {
  const data = axios.get('/cards')

  return {
    type: GET_CARDS,
    payload: data
  }
}
