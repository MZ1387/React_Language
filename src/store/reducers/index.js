import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import CardsList from './reducer_cards';
import LettersList from './reducer_letters';
import LessonsList from './reducer_lessons';
import Translator from './reducer_translator';

const rootReducer = combineReducers({
  letters: LettersList,
  cards: CardsList,
  lessons: LessonsList,
  form: formReducer,
  translator: Translator,
});

export default rootReducer;
