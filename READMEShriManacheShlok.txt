-------------------------------------------------------------------------------------------------
# Deploy App in Playstore Follow below document carefully.
https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29

# Install CLI
https://cli.angular.io/
https://www.techiediaries.com/check-angular-cli-version-and-update-to-latest-angular-version/
npm install -g @angular/cli
ng --version
ng v

# List globally installed packges
npm list -g --depth 0
npm list -l --depth 0
-------------------------------------------------------------------------------------------------
# Install JDK using following link, Need sign in. 
https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
-------------------------------------------------------------------------------------------------
# Install android package if got following error.
> Configure project :app
File C:\Users\PRECIOUS\.android\repositories.cfg could not be loaded.
Checking the license for package Android SDK Platform 28 in C:\Users\PRECIOUS\AppData\Local\Android\sdk\licenses
FAILURE: Build failed with an exception.

# Solutiion for above issue.
C:\Users\PRECIOUS\AppData\Local\Android\Sdk\tools\bin\sdkmanager "platforms;android-28"
-------------------------------------------------------------------------------------------------
# Generate a keystore.
"C:\Program Files\Java\jdk1.8.0_241\jre\bin\keytool.exe" -genkey -v -keystore helloappworld.keystore -alias helloappworldmobileapps -keyalg RSA -keysize 2048 -validity 10000

# Import keystore.
"C:\Program Files\Java\jdk1.8.0_241\jre\bin\keytool.exe" -importkeystore -srckeystore helloappworld.keystore -destkeystore helloappworld.keystore -deststoretype pkcs12

# Sign the java archive package
"C:\Program Files\Java\jdk1.8.0_241\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore helloappworld.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk helloappworldmobileapps

# Install on mobile by copying apk file.
-------------------------------------------------------------------------------------------------
ng build --prod --aot
cordova build --release android
"C:\Program Files\Java\jdk1.8.0_241\jre\bin\keytool.exe" -genkey -v -keystore helloappworld.keystore -alias helloappworldmobileapps -keyalg RSA -keysize 2048 -validity 10000
"C:\Program Files\Java\jdk1.8.0_241\jre\bin\keytool.exe" -importkeystore -srckeystore helloappworld.keystore -destkeystore helloappworld.keystore -deststoretype pkcs12
"C:\Program Files\Java\jdk1.8.0_241\bin\jarsigner.exe" -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore helloappworld.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk helloappworldmobileapps

"C:\Users\PRECIOUS\AppData\Local\Android\Sdk\build-tools\29.0.1\zipalign.exe" -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk platforms\android\app\build\outputs\apk\release\app-release-signed.apk
-------------------------------------------------------------------------------------------------
# Create Angular project.
https://medium.com/javascript-in-plain-english/understanding-angular-and-creating-your-first-application-4b81b666f7b4
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps\PreciousFamilyMoments
ng new PreciousFamilyMoments
cd PreciousFamilyMoments
ng serve --open
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps\AngularApp
ng new AngularApp
cd AngularApp
ng serve --open
-------------------------------------------------------------------------------------------------
# Angular DB
https://appdividend.com/2019/06/04/angular-8-tutorial-with-example-learn-angular-8-crud-from-scratch/
https://stackoverflow.com/questions/55438664/using-sqlite-as-database-for-angular-v7

# Sqlite Iconic
https://www.techiediaries.com/mobiledev/ionic2-sqlstorage-with-sqlite-and-cordova/
https://www.djamware.com/post/59c53a1280aca768e4d2b143/ionic-3-angular-4-and-sqlite-crud-offline-mobile-app
https://ionicframework.com/docs/native/sqlite/
https://stackoverflow.com/questions/52505457/sqlite-with-ionic-4-cannot-read-property-then-of-undefined-typeerror-cannot
https://www.techiediaries.com/mocking-native-sqlite-plugin/

# Use iconic storage
https://ionicframework.com/docs/angular/storage
https://www.techiediaries.com/ionic-storage-tutorial-example/

# Use Ionic Sqlite and chrome webrowser for test app
IMP : https://gist.github.com/NickStemerdink/64c782807fc31b7bc9b529ad4b1d56d5
https://forum.ionicframework.com/t/ionic-sqlite-and-crhome-webrowser-for-test-app/69035/7
https://medium.com/@surajair/ionic-native-sqlite-with-browser-development-6847b7f9611#:~:text=Line%20number%2022%2C%20call%20the,in%20sql%20folder%20called%20%60browser
https://www.freakyjolly.com/ionic-sqlite-tutorial-using-crud-operations/#.XuTvaEUzaUk

alert('freaky_datatable Database Created!');

ionic generate service mySQLite

# Install ionic
npm install -g ionic
npm uninstall -g ionic cordova
npm install -g ionic cordova
npm i -g cordova-res
ionic cordova resources android --force

cd /d D:\Amol\apps\Student
code .
ionic serve 

ionic start Student blank --type=angular
ionic cordova platform add android
ionic cordova plugin add cordova-sqlite-storage

npm install @ionic-native/sqlite
npm install @ionic-native/sqlite@5.26.0
npm install --save @ionic-native/sqlite@5

ionic serve 
ionic serve --lab

ionic cordova plugin add cordova-sqlite-storage
npm install --save @ionic-native/sqlite
ionic cordova plugin add cordova-plugin-x-toast
npm install --save @ionic-native/toast

ionic cordova platform rm browser --save
ionic cordova platform add browser@latest --save

ionic cordova run browser

ng generate component AddCategory
	
# Create apk file
https://ionicframework.com/docs/v1/guide/publishing.html

ionic cordova build android
ionic cordova build --release android

keytool -genkey -v -keystore studentmarksheet.keystore -alias StudentMarksheetApp -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore studentmarksheet.keystore app-release-unsigned.apk StudentMarksheetApp
C:\Users\g4dqxc\AppData\Local\Android\Sdk\build-tools\29.0.3\zipalign -v 4 app-release-unsigned.apk app-student-marksheet.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
keytool -genkey -v -keystore BachatGatApp.keystore -alias BachatGatApp -keyalg RSA -keysize 2048 -validity 10000

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore BachatGatApp.keystore BachatGat-App.apk BachatGatApp
C:\Users\g4dqxc\AppData\Local\Android\Sdk\build-tools\29.0.3\zipalign -v 4 BachatGat-App.apk BachatGatApp.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps\PreciousMoneyManager
ng new PreciousMoneyManager
cd PreciousMoneyManager
ng serve --open
ng generate component Home
ng generate component Report
ng generate component Transactions
ng generate component Categories
ng generate component TransPeriod
ng generate component AddTransaction
ng generate component AddCategorie
ng generate service MoneyManager
-------------------------------------------------------------------------------------------------
# Improvements
All shlok audio
Playstore descriptions
Playstore Adds adMob
Vertical size alignment
Proper English translation
Marathi translation
Select Shlok Icons
Settings(color, font etc)
Reduce initial loading time
Store key store at google drive
Back button to exit app
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps\PreciousShriManacheShlok
cd /d D:\Amol\apps
ng new PreciousShriManacheShlok
cd PreciousShriManacheShlok
ng serve --open
ng generate component Home
ng generate component About
ng generate component Pasaydan

# Create APK file and deploy in playstore
https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29

# Convert Angular project to Android
npm install -g cordova
cd /d D:\Amol\apps\cordova\PreciousShriManacheShlok
cd /d D:\Amol\apps\cordova
cordova create PreciousShriManacheShlok com.precious.shri.manache.shlok PreciousShriManacheShlok
cd PreciousShriManacheShlok
cordova platform add android

cd /d D:\Amol\apps\PreciousShriManacheShlok
ng serve --open
ng build --prod --aot
cordova build android
cordova build --release android

keytool -genkey -v -keystore PreciousShriManacheShlok.keystore -alias PreciousShriManacheShlokApp -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore PreciousShriManacheShlok.keystore app-release-unsigned.apk PreciousShriManacheShlokApp

zipalign -v 4 app-release-unsigned.apk app-precious-shri-manache-shlok.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
# Trim, Cut Audio
https://mp3cut.net/
shlok-180 : 01:29.00.0
-------------------------------------------------------------------------------------------------
# Swipe tabs in angular 8
https://stackoverflow.com/questions/43751187/how-to-enable-swipe-gesture-to-move-to-next-tab-for-tabs-module-in-angular-mater/43752034
-------------------------------------------------------------------------------------------------
# How to save your app state in localStorage with Angular
https://medium.com/@tiagovalverde/how-to-save-your-app-state-in-localstorage-with-angular-ce3f49362e31
-------------------------------------------------------------------------------------------------
# Material Tab creation.
https://material.angular.io/components/tabs/overview
https://stackblitz.com/angular/vojrbmlyklr?file=src%2Fmain.tss
npm i -s @angular/material@latest
npm install --save @angular/material @angular/cdk

# Run time tab creation.
https://www.freakyjolly.com/angular-bootstrap-tabset-tutorial-with-options-by-example/
npm install --save @ng-bootstrap/ng-bootstrap
npm i bootstrap

# Text below image in tab
https://github.com/angular/components/issues/10141 
https://stackblitz.com/edit/angular-ikazee

# Demo
https://stackblitz.com/edit/angular-mat-tab-active?file=styles.css
https://stackblitz.com/edit/angular-ikazee

# Button
https://stackblitz.com/edit/ng-mat-beta-12-k9xtek?file=app/app.component.html

<md-icon md-svg-src="img/icons/ic_place_24px.svg" style="display:inline-block;"></md-icon>

# Bidirectional parameter passing
https://blog.thoughtram.io/angular/2016/10/13/two-way-data-binding-in-angular-2.html
	  
# sqlite database in angular 2 project
https://ionicframework.com/docs/native/native-storage/
https://medium.com/@tiagovalverde/how-to-save-your-app-state-in-localstorage-with-angular-ce3f49362e31
	  
# Tab package
npm install --save @angular/material @angular/cdk

<mat-tab-group>
    <mat-tab label="Tab 1"> <app-latest-article></app-latest-article></mat-tab>
    <mat-tab label="Tab 2">  <app-trending-article></app-trending-article> </mat-tab>
</mat-tab-group>
-------------------------------------------------------------------------------------------------
C:\Program Files\Android\Android Studio\plugins\gradle
-------------------------------------------------------------------------------------------------
# White screen appear
https://stackoverflow.com/questions/48465730/fresh-cordova-build-from-angular2-build-white-screen-on-android
"target": "es2015", - >  "target": "es5",
-------------------------------------------------------------------------------------------------
# Version code
D:\Amol\apps\PreciousMoments\platforms\android\app\src\main\AndroidManifest.xml
-------------------------------------------------------------------------------------------------
# Keystore
# Password
Precious
-------------------------------------------------------------------------------------------------
# Transparent image
https://www9.lunapic.com/editor/?action=transparent
https://transparent.imageonline.co/

# Overlap image
https://pinetools.com/overlay-images
-------------------------------------------------------------------------------------------------
# Create APK file and deploy in playstore
https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29

# Convert Angular project to Android
npm install -g cordova
cd /d D:\Amol\apps\cordova\PreciousFamilyMoments
cd /d D:\Amol\apps\cordova
cordova create PreciousFamilyMoments com.precious.family.moments PreciousFamilyMoments
cd PreciousFamilyMoments
cordova platform add android

cd /d D:\Amol\apps\PreciousFamilyMoments
ng build --prod --aot
cordova build android
cordova build --release android

keytool -genkey -v -keystore PreciousFamilyMoments.keystore -alias PreciousFamilyMomentsApp -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore PreciousFamilyMoments.keystore app-release-unsigned.apk PreciousFamilyMomentsApp

zipalign -v 4 app-release-unsigned.apk app-precious-family-moments.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
# Set following system environment variables
set ANDROID_HOME=C:\Users\g4dqxc\AppData\Local\Android\Sdk
set ANDROID_SDK_ROOT=C:\Users\g4dqxc\AppData\Local\Android\Sdk
set ANDROID_AVD_HOME=C:\Users\g4dqxc\.android\avd

# Set system path environment variables.
C:\Program Files\Android\Android Studio\bin
C:\Users\g4dqxc\.gradle\wrapper\dists\gradle-5.6.4-all\ankdp27end7byghfw1q2sw75f\gradle-5.6.4\bin

# Read file.
https://stackblitz.com/edit/angular-file-read
-------------------------------------------------------------------------------------------------
# Create APK file and deploy in playstore
https://medium.com/@christof.thalmann/convert-angular-project-to-android-apk-in-10-steps-c49e2fddd29

# Convert Angular project to Android
npm install -g cordova
cd /d D:\Amol\apps\cordova\Demo
cd /d D:\Amol\apps\cordova
cordova create Demo com.demo Demo
cd Demo
cordova platform add android

cd /d D:\Amol\apps\Demo
ng build --prod --aot
cordova build android
cordova build --release android

keytool -genkey -v -keystore Demo.keystore -alias DemoApp -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore Demo.keystore platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk DemoApp

zipalign -v 4 platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk app-demo.apk

Is CN=Amol Salunke
OU=Software Development
O=Precious Software Pvt. Ltd.
L=Pune
ST=Maharashtra
C=IN 
correct?
-------------------------------------------------------------------------------------------------
# Navigate To External Website In Angular
https://medium.com/bb-tutorials-and-thoughts/how-to-navigate-to-external-website-in-angular-a80569aa94d5
-------------------------------------------------------------------------------------------------
The web page at file:///android_asset/www/# 
could not be loaded because:
net::ERR_INVALID_RESPONSE
-------------------------------------------------------------------------------------------------
<div class="main-content">
  <ngb-tabset>
    <ngb-tab *ngFor="let tab of tabs ; let index = index">
      <ng-template ngbTabTitle>
        <span>{{tab.name}}</span>
          <span (click)="closeTab(index, $event)">&times;</span>
        </ng-template>
      <ng-template ngbTabContent>{{tab.url}}</ng-template>
    </ngb-tab>
  </ngb-tabset>
</div>
-------------------------------------------------------------------------------------------------
style="text-align:center;background-color: rgb(226, 205, 198);"
<div [style.background]="'url(assets/images/samarthRamdashSwami.jpg)'">
this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'coral';
<div class="bgImg"></div>
-------------------------------------------------------------------------------------------------
# Error
Checking Java JDK and Android SDK versions
ANDROID_SDK_ROOT=C:\Users\g4dqxc\AppData\Local\Android\Sdk (recommended setting)
ANDROID_HOME=C:\Users\g4dqxc\AppData\Local\Android\Sdk (DEPRECATED)
Could not find an installed version of Gradle either in Android Studio,
or on your system to install the gradle wrapper. Please include gradle
in your path, or install Android Studio

# Solution
Add following User Path Env variable.
C:\Program Files\Android\Android Studio\plugins\gradle
-------------------------------------------------------------------------------------------------
Precious Family Moments

Precious Moments in my Life.

There are many, but some of the most precious moments in in my life, Through this app I am sharing this my precious moments with whole word.
Added pictures of precious Moments in my Life.

1024 w x 500 h

FeatureGraphic.jpg

dimensions are 1024 w x 500 h.
-------------------------------------------------------------------------------------------------
The platform "android" does not appear to have been added to this project.
cordova platform add android
-------------------------------------------------------------------------------------------------
Unable to load PlatformApi from platform. Error: Cannot find module 'properties-parser'
https://stackoverflow.com/questions/46799446/cordova-unable-to-load-platformapi
cordova platform rm browser
cordova platform add browser
cordova run browser
-------------------------------------------------------------------------------------------------
# Custom Icons
how to add custom icon in cordova-android 8.1.0 + angular 6 app
D:\Amol\apps\PreciousFamilyMoments\node_modules\cordova-android\bin\templates\project\assets\www\img
D:\Amol\apps\PreciousFamilyMoments\platforms\android\app\src\main\res
-------------------------------------------------------------------------------------------------
# new Version 
Update D:\Amol\apps\PreciousFamilyMoments\config.xml
version="1.0.1" android-versionCode="10001" 
-------------------------------------------------------------------------------------------------
http://www.precioussoftwaretech.com
Precious Software Technologies Pvt. Ltd.
-------------------------------------------------------------------------------------------------
  let audio = new Audio();
  audio.src = "../../../assets/audio/alarm.wav";
  audio.load();
  audio.play();
-------------------------------------------------------------------------------------------------
# Audio download
http://www.samarthramdas400.in/eng/download_audio.php?strongid=watve#watve
https://www.youtube.com/watch?v=X2EAKqwdbec&feature=youtu.be
-------------------------------------------------------------------------------------------------
# Cannot find module 'ngx-drag-scroll'
npm install ngx-drag-scroll --save
-------------------------------------------------------------------------------------------------
# Mat tab slider
https://material.angular.io/components/slider/exampless
https://stackblitz.com/edit/angular-mat-slider-full-options?embed=1&file=app/slider-configurable-example.html
-------------------------------------------------------------------------------------------------
# Meaning
http://harshwardhanjadhav.weebly.com/samarth-ramdass-manache-shlok.html
http://sanskritdocuments.org/doc_trial/manshkeng_unic.html
-------------------------------------------------------------------------------------------------
# Splash Screen
https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/
-------------------------------------------------------------------------------------------------
Shri Manache Shlok
com.precious.shri.manache.shlok
—
—
On 25 May 2020 I deployed com.precious.shri.manache.shlok (Shri Manache Shlok) but still it not published,
It is in 'Pending publication' state.
When it will get published?
-------------------------------------------------------------------------------------------------
# Unpublished app

Precious Moments
com.precious.moments

Precious Movements
com.precious.hello
-------------------------------------------------------------------------------------------------
npm cache clean --force
-------------------------------------------------------------------------------------------------
# Ionic 5 + Angular Project
https://www.freakyjolly.com/ionic-angular-material-how-to-install-material-and-use-its-components-in-ionic-app/#.X_X0atgzaUk
-------------------------------------------------------------------------------------------------
cd /d D:\Amol\apps
ionic start TestProject blank --type=angular

cd /d D:\Amol\apps\TestProject
code .
ionic serve 

ionic cordova plugin add cordova-plugin-admobpro --save --variable ADMOB_APP_ID="ca-app-pub-4127318722091118~3859329747"
npm install @ionic-native/admob-pro

npm install --save @angular/material @angular/cdk
npm install @angular/animations@latest --save
#
ng add @angular/material
# 

ionic cordova plugin add cordova-plugin-x-socialsharing
npm install @ionic-native/social-sharing

npm install material-design-icons --save
-------------------------------------------------------------------------------------------------
# Ad serving is currently limited. Review the issue details and see recommendations about what you can do next.
Limited ad serving started on

9 Mar 2021
What's happening
Ad serving on your account is being temporarily limited while we assess the quality of your app traffic. We'll automatically review and update this limit as we continue to monitor your traffic.

What you can do
Continue to develop your apps and build your audience while we assess your app traffic
Make sure that you're complying with the AdMob Programme policies and restrictions
Learn more about limited ad serving

# Ad serving is currently limited. Review the issue details and see recommendations about what you can do next.
Limited ad serving started on
9 Mar 2021
What's happening
Ad serving on your account is being temporarily limited while we assess the quality of your app traffic. We'll automatically review and update this limit as we continue to monitor your traffic.

What you can do
Continue to develop your apps and build your audience while we assess your app traffic
Make sure that you're complying with the AdMob Programme policies and restrictions
Learn more about limited ad serving

# Add or update app-ads.txt
Your app-ads.txt file is either missing or not valid. To prevent a significant loss in ad revenue, add or update your app-ads.txt.

# Get the most out of Open Bidding (beta)
Open Bidding is now available as a beta in your account. Watch our webinar, Maximizing Ads Revenue with Open Bidding, to learn how it can help you earn more from your apps and how to set it up.
------------------------------------------------------------------------------------------------- 
# Tracktor Diary
appTracktorDiary
tracktordiary.in
------------------------------------------------------------------------------------------------- 
# Deploy Angular App in IIS from Scratch
https://www.youtube.com/watch?v=Px6Va5VKMl8

# How to host angular application on godaddy server
https://www.youtube.com/watch?v=0ilV7rtCJ_Y

# How To #Deploy / #Upload / #Host Angular 4 5 6 7 Project to Server (cpanel)
https://www.youtube.com/watch?v=WlUtztkvOa8 

ng build --prod
-------------------------------------------------------------------------------------------------
Precious Digital Industries Software India Pvt. Ltd.
Precious
------------------------------------------------------------------------------------------------- 
Ad serving is limited
The number of ads you can show has been limited. For details, go to the Policy center.
24 March 2021

Hi Sir/Madam,

Ad serving is limited for account salunkecoep@gmail.com since 24 March 2021 but still date not provided any reason of it.
When Ad service fully enable?

Thanks and Regards,
   Amol Salunke	
   
https://www.learnimmense.com/2021/08/06/admob-adserving-limits/
https://support.google.com/admob/answer/9493252?hl=en   
------------------------------------------------------------------------------------------------- 
Ad serving is limited The number of ads you can show has been limited. For details, go to the Policy center.
------------------------------------------------------------------------------------------------- 
Add or update app-ads.txt
Your app-ads.txt file is either missing or not valid. To prevent a significant loss in ad revenue, add or update your app-ads.txt.
------------------------------------------------------------------------------------------------- 
Ad serving is currently limited. Review the issue details and see recommendations about what you can do next.
Limited ad serving started on
7 Nov 2021
What's happening
Ad serving on your account is being temporarily limited while we assess the quality of your app traffic. We'll automatically review and update this limit as we continue to monitor your traffic.
------------------------------------------------------------------------------------------------- 
app-ads.txt
google.com, pub-4127318722091118, DIRECT, f08c47fec0942fa0

App-ads.txt FAQ
https://support.google.com/admob/answer/9675354?hl=en-GB#notmyapp&zippy=%2Cwhy-do-i-see-an-app-that-isnt-mine-in-my-admob-account
------------------------------------------------------------------------------------------------- 
npm install -g @angular/cli@9.1.13




























