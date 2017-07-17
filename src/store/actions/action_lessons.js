import { GET_CATEGORIES, GET_LESSONS, POST_LESSON } from '../constants';

// GET VOCAB CATEGORY
export function getCategories(data) {
  return {
    type: GET_CATEGORIES,
    payload: data
  }
}

// GET All LESSONS
export function getLessons(data) {
  return {
    type: GET_LESSONS,
    payload: data
  }
}

// POST LESSON
export function postLesson(data) {
  return {
    type: POST_LESSON,
    payload: data
  }
}
