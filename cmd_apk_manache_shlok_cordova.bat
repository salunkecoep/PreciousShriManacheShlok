call ng build --prod --aot
call cordova build --release android
call jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore PreciousShriManacheShlok.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk PreciousShriManacheShlokApp
call zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk app-precious-shri-manache-shlok.apk
