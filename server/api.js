import bodyParser from 'body-parser';

import locales from './i18n';

const app = WebApp.connectHandlers
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.text())
    .use(bodyParser.json());

/** Localization */
app.use('/api/locales', function (req, res, next) {
    const { locale } = req.query;
    if (req.method === 'GET') {
        res.writeHead(200, {
            'Content-Type': 'application/json',
        });
        const localeFile = locales[locale] || locales.en;
        return res.end(JSON.stringify(localeFile));
    }
    next();
});
