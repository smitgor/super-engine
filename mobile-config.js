/* eslint-disable no-undef */
App.info({
    id: 'com.meteorapp.anthaprerna',
    name: 'anthaprerna',
    description: 'Team GGG Project',
    author: 'Team GGG',
    email: 'roy.partha97@gmail.com',
    website: 'https://anthaprerna.meteorapp.com',
});

App.icons({
    android_mdpi: 'res/icon/android/mdpi.png',
    android_hdpi: 'res/icon/android/hdpi.png',
    android_ldpi: 'res/icon/android/ldpi.png',
    android_xhdpi: 'res/icon/android/xhdpi.png',
    android_xxhdpi: 'res/icon/android/xxhdpi.png',
    android_xxxhdpi: 'res/icon/android/xxxhdpi.png',
});

App.launchScreens({
    android_mdpi_portrait: 'res/screen/android/splash-port-mdpi.png',
    android_hdpi_portrait: 'res/screen/android/splash-port-hdpi.png',
    android_ldpi_portrait: 'res/screen/android/splash-port-ldpi.png',
    android_xhdpi_portrait: 'res/screen/android/splash-port-xhdpi.png',
    android_xxhdpi_portrait: 'res/screen/android/splash-port-xxhdpi.png',
    android_xxxhdpi_portrait: 'res/screen/android/splash-port-xxxhdpi.png',
});

App.setPreference('android-targetSdkVersion', '33');
App.setPreference('StatusBarBackgroundColor', '#5850ec');
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference('AutoHideSplashScreen', false);
App.accessRule('*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');

App.appendToConfig(`
  <edit-config file="app/src/main/AndroidManifest.xml" mode="merge" target="/manifest/application" xmlns:android="http://schemas.android.com/apk/res/android">
    <application android:usesCleartextTraffic="true"></application>
  </edit-config>
`);

App.appendToConfig(`
  <universal-links>
    <host name="anthaprerna.meteorapp.com" scheme="https">
      <path event="shareEvent" url="/share/*" />
      <path url="*" event="allOtherLinkEvent" />
    </host>
  </universal-links>
`);
