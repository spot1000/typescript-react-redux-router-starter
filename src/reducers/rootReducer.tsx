
import { enthusiasm } from './enthusiasmReducers';
import { madLib } from './madLibReducers';
import { enthusiasmState, madLibState } from '../types';
import { combineReducers } from 'redux'
import { AllActions } from '../actions/allActions'

export interface RootState {
  enthusiasm: enthusiasmState;
  madLib: madLibState
}

const rootReducer = combineReducers<RootState, AllActions>({
  enthusiasm,
  madLib
})

export default rootReducer