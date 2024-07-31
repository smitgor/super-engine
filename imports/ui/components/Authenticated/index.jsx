import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Authenticated({ children }) {
    const isAuthenticated = useSelector((state) => state.user.userData);
    const location = useLocation().pathname;

    return isAuthenticated ? (
        children
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default Authenticated;
