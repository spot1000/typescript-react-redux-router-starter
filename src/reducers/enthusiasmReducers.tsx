import { EnthusiasmAction } from '../actions/enthusiasmActions';
import { enthusiasmState} from '../types';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

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
        default:
            return state;
    }
}