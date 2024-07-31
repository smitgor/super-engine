import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import i18next from 'i18next';
import store from '../imports/ui/store/store';
import App from '../imports/ui/App';
import initializePushNotification from './pushNotification';
import handleDeepLinking from './deepLinkingHandler';

// localization method globally available
// eslint-disable-next-line no-undef
_t = i18next.t;

Meteor.startup(() => {
    const container = document.getElementById('root');
    const root = createRoot(container);
    root.render(
        <Provider store={store}>
            <App />
        </Provider>
    );

    if (Meteor.isCordova) {
        /** Initializing Push Notification */
        document.addEventListener(
            'deviceready',
            initializePushNotification,
            false
        );

        /** Initializing deeplinking configuration */
        handleDeepLinking();
    }
});
