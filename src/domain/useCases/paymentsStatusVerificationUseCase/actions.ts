import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  // View actions
  paymentsVerificationProcedure: ['requestId'],
  // Reducer
  paymentsVerificationProcedureClear: null,
  paymentsVerificationProcedureRequest: null,
  paymentsVerificationProcedureSuccess: null,
  paymentsVerificationProcedureFailure: ['error']
});

export { Creators, Types };
