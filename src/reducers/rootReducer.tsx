
import { EnthusiasmAction } from '../actions/enthusiasmActions';
import { characterSheetActions } from '../actions/characterSheetActions';
import { enthusiasmState, characterSheetState } from '../types';
import { combineReducers } from 'redux'
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM, CHANGE_NAME, UPDATE_FORM_FIELD } from '../constants';
import { AllActions } from '../actions/allActions'

export interface ApplicationState {
  enthusiasm: enthusiasmState;
  characterSheet: characterSheetState
}

const initialEnthusiasmState = {
  languageName: 'Typescript',  
  enthusiasmLevel: 1
}

export function enthusiasm(state: enthusiasmState = initialEnthusiasmState, action: EnthusiasmAction): enthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case CHANGE_NAME:
      return { ...state, languageName: 'name changed' };
    default:
      return state;
  }
}

const initialcharacterSheetState = {
  fieldValue: 'test'
}

export function characterSheet(state: characterSheetState = initialcharacterSheetState, action: characterSheetActions): characterSheetState {
  switch (action.type) {
    case UPDATE_FORM_FIELD:
      return { ...state, [action.payload.fieldName] : action.payload.fieldValue };
    default:
      return state;
  }
}

const rootReducer = combineReducers<ApplicationState, AllActions>({
  enthusiasm,
  characterSheet
})

export default rootReducer