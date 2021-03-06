# Tour Of Heroes - Angular

## Project setup
```
yarn install
```

### Serve
Run `ng serve` and navigate to `http://localhost:4200/`.

### Run json server
Run `yarn run db`. The resources are available at `http://localhost:4000`.

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

### 2. Display a List
* Displaying a list of heroes with the `*ngFor` directive;
* Binding the `(click)` event;
* Condicionaly displaying the hero's details, if one is selected, using the `*ngIf` directive;
* Binding css classes using the `[class]` binding.

### 3. Create a Feature Component
* Creating a reusable `HeroDetailComponent`;
* Using property binding to controls the child `HeroDetailComponent` from parent `HeroesComponent`;
* Using `@Input` decorator to expose the `hero` property for binding by the external `HeroesComponent`.

### 4. Add Services
* Refactoring data access to `HeroService` class;
* Registering `HeroService` as a provider in the root level;
* Using Angular Dependency Injection to inject the service into the component;
* Using RxJS `of()` to return a `Observable` and mock an asynchronous call;
* Using the `ngOnInit` lifecycle to call the `HeroService`'s method;
* Creating a `MessageService` for loosely-coupled communication;
* Injecting the `MessageService` into the `HeroService`.

### 5. Add Navigation
* Adding the Angular router to navigate among different pages;
* Turning the `AppComponent` into a navigation shell using `<a>` links and the `<router-outlet>`;
* Configuring the `AppRoutingModule`;
* Defining routes, a redirect route and a parameterized route;
* Using the `routerLink` directive in anchor elements;
* Refactoring a tightly-coupled master/detail view into a routed detail view;
* Using router link paramenters to navigate;
* Using the `HeroService` in multiple components.

### 6. Get Data from a Server
* Importing the `HttpClientModule` to use HTTP in the app;
* Refactoring the `HeroService` to load heroes from a web API;
* Extending the `HeroService` to support `post()`, `put()` and `delete()` methods;
* Updating the components to allow adding, editing and deleting heroes.
