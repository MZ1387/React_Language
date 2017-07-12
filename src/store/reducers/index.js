import { combineReducers } from 'redux';

import CardsList from './reducer_cards';
import LettersList from './reducer_letters';
import LessonsList from './reducer_lessons';

const rootReducer = combineReducers({
  letters: LettersList,
  cards: CardsList,
  lessons: LessonsList
});

export default rootReducer;
