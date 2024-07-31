import React from 'react';

// eslint-disable-next-line react/prop-types
export default function FullPageCentered({ children }) {
    return (
        <div className="full-page-centered-container flex-justify-space-between">
            {children}
        </div>
    );
}
