import { TRANSLATE } from '../actions/action_translator';

export default function(state = {
    translated:''

}, action) {

    switch(action.type) {

        case TRANSLATE:
            return {
                ...state,
                translated: action.translated
            }
        default:
            return state;
    }
    return state;
}
