import React, { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store, {
  persistor,
} from './android/components/Search/redux/reducers/store';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './Navigation/RootNavigation';
import { checkToken } from './android/api/user';

const App = () => {
  const appState = useRef(AppState.currentState);
  useEffect(() => {
    const subscriptions = AppState.addEventListener(
      'change',
      async nextAppState => {
        if (
          appState.current.match(/inactive|backgroun/) &&
          nextAppState === 'active'
        ) {
          // store.dispatch({type: 'RESET'});
          console.log('you have come back into the app');
          checkToken();
        }
        checkToken();
        appState.current = nextAppState;
      },
    );
  });
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null} />
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
