
import * as constants from '../constants';

export interface UpdateFormField {
    type: constants.UPDATE_FORM_FIELD;
    payload: {
        fieldName : string;
        fieldValue: string | number;
    }
}

export type characterSheetActions = UpdateFormField;

export function UpdateFormField(fieldName:string, fieldValue:string): UpdateFormField {
    return {
        type: constants.UPDATE_FORM_FIELD,
        payload: {
            fieldName,
            fieldValue
        }
    };
}