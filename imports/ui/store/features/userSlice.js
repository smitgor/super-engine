import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userData: null,
    initializedTracker: false,
    subscribed: false,
};

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            state.userData = action.payload;
        },
        initializeTracker: (state) => {
            state.initializedTracker = true;
        },
        setSubscribed: (state) => {
            state.subscribed = true;
        },
        logInUser: (state, action) => {
            const { username, password } = action.payload;
            Meteor.loginWithPassword(username, password, (err) => {
                // eslint-disable-next-line no-alert
                if (err) alert(err.reason);
            });
        },
        logOutUser: () => {
            Meteor.logout(() => {
                console.log('logged out');
            });
        },
    },
});

export default user.reducer;
export const {
    updateUser,
    initializeTracker,
    setSubscribed,
    logOutUser,
    logInUser,
} = user.actions;
