import React from 'react';
import FullPageCentered from '../FullPageCentered';

export default function Loading({ isFullPage, loadingText }) {
    return isFullPage ? (
        <FullPageCentered>
            <div className="loading-container">
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="loading-text">Loading..</div>
            </div>
        </FullPageCentered>
    ) : (
        <div className="loading-container">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {loadingText && <div className="loading-text">{loadingText}</div>}
        </div>
    );
}
