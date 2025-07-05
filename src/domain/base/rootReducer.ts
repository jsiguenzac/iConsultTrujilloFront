import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { storageManager } from "../../core/managers";
import { paymentsStatusVerification } from "../useCases";

const basePersistConfig = {
  storage: storageManager.create(),
  version: 1,
  blacklist: [],
};

const authPersistConfig = {
  ...basePersistConfig,
  key: "auth",
  blacklist: ["error"],
};

/* cuando tenga formulario de inicio de sesion debe llamar al reducer de signIn */
// const auth = persistReducer(authPersistConfig, validateUserUseCase.reducer);

/* const breadcrumb = persistReducer(
  { ...basePersistConfig, key: 'breadcrumb' },
  breadcrumbUseCase.reducer
); */
const paymentsPersistConfig = {
  ...basePersistConfig,
  key: 'paymentsStatusVerification'
};

export default combineReducers({
  paymentsStatusVerification: persistReducer(
    paymentsPersistConfig,
    paymentsStatusVerification.reducer
  ),
});
