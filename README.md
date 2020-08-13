# AngularappV10

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

Steps followed to create the project:
- Created angular 10 project using command ng new app-name
- Migrated project to nativescript  [using this guid](https://docs.nativescript.org/angular/code-sharing/migrating-a-web-project) . 
 npm install --global @angular/cli
 
 npm install --global nativescript
 
 ng add @nativescript/schematics
 
 - Along with auto generated component .I have created another component.
 - I ran this application on ios uisng - nsc run ios --emulator
 - Application build on the emulator 
 - On first component ,I get the value entered on text field .I'm using form Control in the sample . 
 - The issue is after after navigation. Navigating to second component.
 -On second component ,Form value changes are not detected , I'm not able to fetch the value from text field. Neither ngModel nor (textChange) event gets triggered
 
