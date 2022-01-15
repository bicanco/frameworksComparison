# Tour Of Heroes - Angular

## Project setup
```
yarn install
```

### Serve
Run `ng serve` and navigate to `http://localhost:4200/`.

### Initial Setup
Project created with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.3 using the following commands:
```
ng new angular-tour-of-heroes --commit=false --minimal=true --package-manager=yarn --skip-git=true --skip-tests=true --style=scss
cd angular-tour-of-heroes
ng add @angular-eslint/schematics
```

### 1. The Hero Editor
* Using the CLI to create `HeroesComponent`;
* Displaying the `HeroesComponent` by adding it to the `AppComponent`;
* Applying the `UppercasePipe` to format the name;
* Using two-way data binding with `ngModel` directive;
* Adding the `FormsModule` to the `AppModule` in order to recognize the `ngModel` directive;
* Reviewing the declaration of components in the `AppModule`.
