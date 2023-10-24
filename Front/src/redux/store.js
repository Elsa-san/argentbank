import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/login';
import userReducer from "./reducers/user"

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,  
},
  devTools: true,
});

export default store;