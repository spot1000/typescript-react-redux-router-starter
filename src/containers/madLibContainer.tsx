import Madlib from '../components/madLib';
import * as actions from '../actions/madLibActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { RootState } from '../reducers/rootReducer'

export function mapStateToProps(state: RootState) {
  return {
    name: state.madLib.name,
    verb: state.madLib.verb,
    noun: state.madLib.noun,
    age: state.madLib.age,
  };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.madLibActions>) {
  return {
    onUpdateValue: (field:string, value:any) => dispatch(actions.UpdateFormField(field, value)),
    clearForm: () => dispatch(actions.ClearForm())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Madlib);