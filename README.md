HOW TO INSTALL
> npm install ionic -g cordova (optional if you already install ionic and cordova globally)
> npm install
ok

> ionic serve
ok

>ionic cordova build ios
> error failed to install plugin
> ionic cordova plugin rm cordova-plugin-screen-orientation
  ionic cordova plugin add https://github.com/apache/cordova-plugin-screen-orientation.git --save

  ionic cordova plugin rm cordova-plugin-wkwebview-engine
  ionic cordova plugin add https://github.com/ionic-team/cordova-plugin-wkwebview-engine.git --save

  ionic cordova plugin rm cordova-plugin-keyboard --save
  ionic cordova plugin add https://github.com/cjpearson/cordova-plugin-keyboard.git --save
ok test rebase head