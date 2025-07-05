import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { createGlobalStyle } from 'styled-components';
import configureStore from '../domain/base/configureStore';
import RoutesMain from './components/Routes';

const { store, persistor } = configureStore();
const GlobalStyles = createGlobalStyle`
   body.no-scroll {
    overflow-y:hidden !important;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #b0c0ca;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #b0c0ca;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {/* Comentado mientras no hay reducers persistibles */}
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RoutesMain />
      {/* </PersistGate> */}
    </Provider>
  );
}

export default App;
