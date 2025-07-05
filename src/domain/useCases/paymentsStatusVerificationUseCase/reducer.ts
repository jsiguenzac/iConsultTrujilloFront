import { createReducer } from 'reduxsauce';
import { Types } from './actions';
import reducerBase from '../../base/reducerBase';

const { INITIAL_STATE, request, success, failure, clear } = reducerBase();

export default createReducer(INITIAL_STATE, {
  [Types.PAYMENTS_VERIFICATION_PROCEDURE_REQUEST]: request,
  [Types.PAYMENTS_VERIFICATION_PROCEDURE_SUCCESS]: success,
  [Types.PAYMENTS_VERIFICATION_PROCEDURE_FAILURE]: failure,
  [Types.PAYMENTS_VERIFICATION_PROCEDURE_CLEAR]: clear
});
