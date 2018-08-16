import Hello from '../components/Hello';
import * as actions from '../actions/characterSheetActions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

export function mapDispatchToProps(dispatch: Dispatch<actions.characterSheetActions>) {
  return {
    onUpdateValue: (field:string, value:any) => dispatch(actions.UpdateFormField(field, value))
  };
}

export default connect(mapDispatchToProps)(Hello);