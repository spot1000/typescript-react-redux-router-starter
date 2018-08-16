import { madLibActions } from '../actions/madLibActions';
import { madLibState } from '../types';
import { UPDATE_FORM_FIELD, CLEAR_FORM } from '../constants';

const madLibState = {
    name: "",
    verb: "",
    noun: "",
    age: ""
}

export function madLib(state = madLibState, action: madLibActions): madLibState {
    switch (action.type) {
        case UPDATE_FORM_FIELD:
            return { ...state, [action.payload.fieldName] : action.payload.fieldValue };
        case CLEAR_FORM:
            return { 
                name: "",
                verb: "",
                noun: "",
                age: ""
            } 
        default:
            return state;
    }
}