# SppotiWizard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

This wizard support Bootstrap 3 & 4

## DOWNLOAD

`npm install sppoti-wizard`

## Add wizard

`<sppoti-wizard></sppoti-wizard>`


## Add step

`<wizard-step [title]="" [isValid]="" (onNext)="" (onPrev)="" (onComplete)="" ></wizard-step>`

```
...
 imports: [
    BrowserModule,
    // Import wizard
    SppotiWizardModule.forRoot()
  ]
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
