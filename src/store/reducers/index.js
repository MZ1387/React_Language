import { combineReducers } from 'redux';

import CardsList from './reducer_cards';
import LettersList from './reducer_letters';
import LessonsList from './reducer_lessons';
import Translator from './reducer_translator';

const rootReducer = combineReducers({
  letters: LettersList,
  cards: CardsList,
  lessons: LessonsList,
  translator: Translator,
});

export default rootReducer;
