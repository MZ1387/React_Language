import axios from 'axios';
import '../../stubs/index';

export const GET_LETTERS = 'GET_LETTERS';

export function getLetters() {
  const data = axios.get('/api/letters');

  return {
    type: GET_LETTERS,
    payload: data
  }
}
