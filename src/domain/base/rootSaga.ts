import { takeEvery, takeLatest } from 'redux-saga/effects';
import {
  paymentsStatusVerification
} from '../useCases';

export default function* rootSaga() {
  yield takeLatest(
    paymentsStatusVerification.Types.PAYMENTS_VERIFICATION_PROCEDURE,
    paymentsStatusVerification.saga
  );
}
