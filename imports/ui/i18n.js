import i18next from 'i18next';

import Fetch from 'i18next-fetch-backend';

/** Get the localization jsons from server */
const loadPath = `${Meteor.settings.public.API_URL}locales?locale={{lng}}&ns={{ns}}`;
i18next.use(Fetch).init(
    {
        loadPath,
        lng: 'bn',
        fallbackLng: ['en'],
        preload: ['en', 'bn'],
        ns: 'translation',
        defaultNS: 'translation',
        keySeparator: false, // Allow usage of dots in keys
        nsSeparator: false,
        backend: {
            loadPath,
        },
    },
    (err, t) => {
        console.log('translate loaded');
        if (err) return console.error(err);
    }
);

export default i18next;
