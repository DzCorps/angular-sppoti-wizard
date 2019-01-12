# SppotiWizard

[![npm version](https://badge.fury.io/js/angular-sppoti-wizard.svg)](https://badge.fury.io/js/angular-sppoti-wizard)  [![Codacy Badge](https://api.codacy.com/project/badge/Grade/263e746d621d4afd9a23732b0bd053c3)](https://www.codacy.com/app/DzCorps/sppoti-wizard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=DzCorps/sppoti-wizard&amp;utm_campaign=Badge_Grade)
[![BCH compliance](https://bettercodehub.com/edge/badge/DzCorps/angular-emojione?branch=master)](https://bettercodehub.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This wizard support Bootstrap 3 & 4

## DOWNLOAD

`npm install angular-sppoti-wizard`

## Add wizard

**First:** Import the module

```
...
 imports: [
    BrowserModule,
    // Import wizard
    SppotiWizardModule.forRoot()
  ]
...
```

**Second:** Add the directive to your component

`<sppoti-wizard></sppoti-wizard>`

**Third:** Add steps inside the previous directive

```
...
<sppoti-wizard>
    <wizard-step [title]="" [isValid]="" (onNext)="" (onPrev)="" (onComplete)="" ></wizard-step>
<sppoti-wizard>
...
```

## Input and Output

### INPUT

`title: string`

`isValid: function()`

### OUTPUT

`onNext: function()` 

`onPrev: function()`

`onComplete: function()    |    only for the last step`

## Demo 

  ---> https://dzcorps.github.io/sppoti-wizard/
  

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## CONTRIBUTE

Fork project and help improve this module
