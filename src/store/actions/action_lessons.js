import axios from 'axios';
import '../../stubs/index';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_LESSONS = 'GET_LESSONS';

// GET VOCAB CATEGORY
export function getCategories() {
  const data = axios.get('/api/categories')

  return {
    type: GET_CATEGORIES,
    payload: data
  }
}

// GET All LESSONS
export function getLessons() {
  const data = axios.get('/api/lessons')

  return {
    type: GET_LESSONS,
    payload: data
  }
}
