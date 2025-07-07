import { combineReducers, configureStore } from '@reduxjs/toolkit';
import User from './Users';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import logger from 'redux-logger';
// import logger from 'redux-logger';

const rootReducer = combineReducers({
  user: User,
});

const configuration = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
};

const persistedReducer = persistReducer(configuration, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger);
  },
});

// const store = configureStore({
//   reducer: rootReducer,
//   // middleware: getDefaultMiddleware => {
//   //   return getDefaultMiddleware().concat(logger);  este trecho permite verificar o nates e o depois as actualizacaoes do payload ajudando na identificacao de bugs
//   // },
// });

// ✅ Exportar os tipos da store+
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);

export default store;
