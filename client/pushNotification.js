function initializePushNotification() {
    // NOTE: Update the init value below with your OneSignal AppId.
    window.plugins.OneSignal.init(Meteor.settings.public.ONESIGNAL_APP_ID);

    console.log('init done');
    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 6) to better communicate to your users what notifications they will get.
    window.plugins.OneSignal.Notifications.requestPermission((accepted) => {
        console.log(`User accepted notifications: ${accepted}`);
    });

    window.plugins.OneSignal.Notifications.addEventListener(
        'click',
        (event) => {
            console.log('notificationData', event);
        }
    );

    // /** Location */
    // console.log('Location.setShared');

    // window.plugins.OneSignal.Location.setShared(true);

    // console.log('asking location permission');
    // window.plugins.OneSignal.Location.requestPermission(async (accepted) => {
    //     console.log(`User has given location permission: ${accepted}`);

    //     console.log(
    //         ' location =-=',
    //         await window.plugins.OneSignal.Location.isShared()
    //     );
    // });
}

export default initializePushNotification;
