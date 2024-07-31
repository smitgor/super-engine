import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme:
        (typeof localStorage !== 'undefined' &&
            localStorage.getItem('theme')) ||
        'LIGHT',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            if (state.theme === 'LIGHT') state.theme = 'DARK';
            else state.theme = 'LIGHT';

            localStorage.setItem('theme', state.theme);
        },
    },
});

export default themeSlice.reducer;

export const { toggleTheme } = themeSlice.actions;
