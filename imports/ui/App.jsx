import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

import router from './router';
import {
    updateUser,
    initializeTracker,
    setSubscribed,
} from './store/features/userSlice';
import Loading from './components/common/Loading';

const App = () => {
    const { initializedTracker, subscribed } = useSelector(
        (state) => state.user
    );
    const dispatch = useDispatch();
    if (!initializedTracker) {
        dispatch(initializeTracker());
        Meteor.subscribe('userData', () => {
            dispatch(setSubscribed());
        });
        // eslint-disable-next-line no-undef
        Tracker.autorun(() => {
            const user = Meteor.user();
            dispatch(updateUser(user));
        });
    }
    /**
     * Google Analytics
     */
    ReactGA.initialize([
        {
            trackingId: Meteor.settings.public.GA_TRACKING_ID,
        },
    ]);

    return (
        <I18nextProvider i18n={i18n}>
            {!subscribed ? (
                <Loading isFullPage />
            ) : (
                <RouterProvider router={router} />
            )}
        </I18nextProvider>
    );
};

export default App;
