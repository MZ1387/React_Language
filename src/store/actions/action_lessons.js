import axios from 'axios';
import '../../stubs/index';
import * as firebase from 'firebase';
import { lessonsRef } from '../../firebase';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_LESSONS = 'GET_LESSONS';
export const POST_LESSON = 'POST_LESSON';

// GET VOCAB CATEGORY
export function getCategories() {
  const data = axios.get('/api/categories');
  // const dbLessons = firebase.database().ref('/lessons');
  // dbLessons.on('value', snap => {
  //     this.setState({
  //       speed: snap.val()
  //     })
  //   });

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
