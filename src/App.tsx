import React from 'react';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'store/configureStore';

import InitComponent from 'components/InitComponent';

export default function App () {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <InitComponent />
      </PersistGate>
    </Provider>
  );
}
