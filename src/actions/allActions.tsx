// Import all different action sets
import { EnthusiasmAction } from './enthusiasmActions';
import { madLibActions } from './madLibActions';

// Creates a single type for all your actions which will be used for the Root Reducer
export type AllActions = madLibActions | EnthusiasmAction;