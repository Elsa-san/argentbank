import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/login';

const store = configureStore({
  reducer: {
    auth: authReducer, // Utilisez 'auth' comme clé pour le réducteur loginReducer
  },
  devTools: true,
});

export default store;