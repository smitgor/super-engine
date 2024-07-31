import React from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from './Header';
import Sidebar from './BottomBar';

import Main from './Main';
import ErrorMessage from './ErrorMessage';

const Layout = () => {
    const isAuthenticated = useSelector((state) => state.user.userData);
    const theme = useSelector((state) => state.theme.theme);

    return (
        <div className={`layout ${theme}`}>
            {isAuthenticated && (
                <>
                    <Header />
                    <ErrorMessage />
                    <div className="page-container">
                        <Main>
                            <Outlet />
                        </Main>
                    </div>
                    <Sidebar />
                </>
            )}

            {!isAuthenticated && <Outlet />}
        </div>
    );
};

export default Layout;
