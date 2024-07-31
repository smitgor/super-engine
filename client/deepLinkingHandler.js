const handleDeepLinking = () => {
    window.plugins.universalLinks.subscribe('shareEvent', function (eventData) {
        const shareParameters = eventData.path.split('/share')[1];
        alert(`shareEvent: ${JSON.stringify(shareParameters)}`); // just to check event data - should be removed
    });

    window.plugins.universalLinks.subscribe(
        'allOtherLinkEvent',
        function (eventData) {
            console.log(
                `Did launch application from the link: ${eventData.url}`
            );
            alert(`allOtherLinkEvent: ${JSON.stringify(eventData)}`); // just to check event data - should be removed
        }
    );
};

export default handleDeepLinking;
