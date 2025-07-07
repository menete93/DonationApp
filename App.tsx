import React from 'react';
import MainNavigation from './Navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, {
  persistor,
} from './android/components/Search/redux/reducers/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} />
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
