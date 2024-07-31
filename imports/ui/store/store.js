import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import themeReducer from './features/themeSlice';
import errorReducer from './features/errorSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        error: errorReducer,
    },
});

export default store;
