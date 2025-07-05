import { put, call } from 'redux-saga/effects';
import { Types } from './actions';
// import CertificateOfStudiesRepository from '../../../../repositories/CertificateOfStudiesRepository';
// import CertificateOfStudiesDataRepository from '../../../../../data/repositories/CertificateOfStudiesDataRepository';

export default function* execute(action: any): any {
  try {
    yield put({ type: Types.PAYMENTS_VERIFICATION_PROCEDURE_REQUEST });
    // const certificateOfStudiesRepository: CertificateOfStudiesRepository =
    //   new CertificateOfStudiesDataRepository();

    // const paymentStatusVerificationResponse = yield call(
    //   certificateOfStudiesRepository.paymentsStatusVerification,
    //   action.requestId
    // );
    // if (!paymentStatusVerificationResponse) {
    //   throw new Error('No se pudo obtener la verificación de pagos.');
    // }
    yield put({
      type: Types.PAYMENTS_VERIFICATION_PROCEDURE_SUCCESS,
      // data: paymentStatusVerificationResponse?.paymentsStatus
      data: {
        paymentsStatus: {
          status: 'success',
          message: 'Verificación de pagos exitosa'
        }
      }
    });
  } catch (error) {
    let errorMessage =
      'Ocurrió un error al momento de obtener la verificación de pagos.';
    if (error && typeof error === 'object' && 'message' in error) {
      errorMessage = `Ocurrió un error al momento de obtener la verificación de pagos: ${
        (error as { message: string }).message
      }`;
    }
    yield put({
      type: Types.PAYMENTS_VERIFICATION_PROCEDURE_FAILURE,
      error: errorMessage
    });
  }
}
