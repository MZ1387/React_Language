import { combineReducers } from 'redux';
import LettersList from './reducer_letters';
import CardsList from './reducer_cards';

const rootReducer = combineReducers({
  letters: LettersList,
  cards: CardsList
});

export default rootReducer;
