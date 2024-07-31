import * as React from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Authenticated from '../components/Authenticated';
import UnAuthenticated from '../components/UnAuthenticated';
import Layout from '../components/Layout';

/** Orders Routes */
import OrdersList from '../pages/Orders';
import OrderDetails from '../pages/Orders/Details';

/** Inventory Routes */
import Inventory from '../pages/Inventory';

import Home from '../pages/Home';
import Login from '../pages/Login';
import Settings from '../pages/Settings';
import ErrorPage from '../pages/Error';

const router = createBrowserRouter([
    {
        errorElement: <ErrorPage />,
        element: <Layout />,
        children: [
            {
                path: '/login',
                element: (
                    <UnAuthenticated>
                        <Login />
                    </UnAuthenticated>
                ),
            },
            {
                path: '/',
                element: (
                    <Authenticated>
                        <Home />
                    </Authenticated>
                ),
            },
            {
                path: 'orders',
                element: (
                    <Authenticated>
                        <OrdersList />
                    </Authenticated>
                ),
            },
            {
                path: 'orders/details/:sourceId',
                element: (
                    <Authenticated>
                        <OrderDetails />
                    </Authenticated>
                ),
            },

            {
                path: 'settings',
                element: (
                    <Authenticated>
                        <Settings />
                    </Authenticated>
                ),
            },
            {
                path: 'inventory',
                element: (
                    <Authenticated>
                        <Inventory />
                    </Authenticated>
                ),
            },
        ],
    },
]);

export default router;
