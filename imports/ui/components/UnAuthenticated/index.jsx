import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types
function UnAuthenticated({ children }) {
    const isUnAuthenticated = useSelector((state) => !state.user.userData);
    return isUnAuthenticated ? children : <Navigate to="/" replace />;
}

export default UnAuthenticated;
