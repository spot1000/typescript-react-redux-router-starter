
import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
}

export interface ChangeName {
    type: constants.CHANGE_NAME;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | ChangeName;

export function incrementEnthusiasm(): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM
    };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM
    };
}

export function changeName(): ChangeName {
    return {
        type: constants.CHANGE_NAME
    };
}