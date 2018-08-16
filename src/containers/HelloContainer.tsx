import Hello from '../components/Hello';
import * as actions from '../actions/enthusiasmActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../reducers/rootReducer'

export function mapStateToProps(state: ApplicationState) {
  return {
    enthusiasmLevel : state.enthusiasm.enthusiasmLevel,
    name: state.enthusiasm.languageName,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    onChangeName: () => dispatch(actions.changeName())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);