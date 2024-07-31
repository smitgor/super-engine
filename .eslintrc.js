module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'plugin:meteor/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'react', 'meteor'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'default-param-last': 'off',
        'no-param-reassign': 'off',
        'consistent-return': 'off',
        'func-names': 'off',
        'no-nested-ternary': 'off',
        'dot-notation': [
            1,
            { allowKeywords: true, allowPattern: '^[a-z]+(_[a-z]+)+$' },
        ],
        'meteor/audit-argument-checks': [0],
        'react/function-component-definition': [
            2,
            {
                namedComponents: 'arrow-function',
                unnamedComponents: 'arrow-function',
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'react/prop-types': 'off',
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_id', '_debug', '__'],
            },
        ],
        'import/no-unresolved': [
            2,
            {
                ignore: ['^meteor/'],
            },
        ],
    },
    globals: {
        Meteor: 'readonly',
        WebApp: 'readonly',
        Accounts: 'readonly',
        Mongo: 'readonly',
        _t: 'readonly',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
            },
        },
    },
};
