
import * as constants from '../constants';

export interface UpdateFormField {
    type: constants.UPDATE_FORM_FIELD;
    payload: {
        fieldName : string;
        fieldValue: string | number;
    }
}

export interface ClearForm {
    type: constants.CLEAR_FORM;
}

export type madLibActions = UpdateFormField | ClearForm;

export function UpdateFormField(fieldName:string, fieldValue:string): UpdateFormField {
    return {
        type: constants.UPDATE_FORM_FIELD,
        payload: {
            fieldName,
            fieldValue
        }
    };
}

export function ClearForm(): ClearForm {
    return {
        type: constants.CLEAR_FORM
    };
}