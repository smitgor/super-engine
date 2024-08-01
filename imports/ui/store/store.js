import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice';
import themeReducer from './features/themeSlice';
import errorReducer from './features/errorSlice';
import cartReducer from './features/cart'

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        error: errorReducer,
        cart: cartReducer
    },
});

export default store;
