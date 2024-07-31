import { createSlice } from '@reduxjs/toolkit';

type ErrorType = {
    message: string | undefined;
};

const initialState = {
    message: undefined,
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    reducers: {
        setError: (state: ErrorType, action: any) => {
            state.message = action.payload;
        },
        clearError: (state: ErrorType) => {
            state.message = undefined;
        },
    },
});

export default errorSlice.reducer;

const { setError, clearError } = errorSlice.actions;

export { setError, clearError };
