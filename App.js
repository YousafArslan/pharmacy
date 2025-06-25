import React from 'react';
import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/redux/store';
import RootNavigator from './src/routes/RootNavigator';
import "react-native-devsettings";
import {ToastProvider} from 'react-native-toast-notifications';

const App = () => {

  return (
    <Provider store={store}>
      <ToastProvider>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <RootNavigator />
      {/* </PersistGate> */}
      </ToastProvider>
    </Provider>
  );
};
export default App;