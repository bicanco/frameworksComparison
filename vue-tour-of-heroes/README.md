# Tour Of Heroes - Vue3

## Project setup
```
yarn install
```

### Serve
Run `yarn serve` and navigate to `http://localhost:8080/`.

### Run json server
Run `yarn run db`. The resources are available at `http://localhost:4000`.

### Initial Setup
Project created with [Vue CLI](https://cli.vuejs.org/) using the following command:
```
vue create vue-tour-of-heroes
```

### 1. The Hero Editor
* Creating the component `Heroes`;
* Displaying the `Heroes` component by adding it to the `App` component;
* Applying the `uppercase` global filter to format the name;
* Using two-way data binding with `v-model` directive;
* Reviewing the declaration of components in the `App` component.

### 2. Display a List
* Displaying a list of heroes with the `v-for` directive and binding the `:key`;
* Binding the `@click` event;
* Condicionaly displaying the hero's details, if one is selected, using the `v-if` directive;
* Binding css classes with the `:class` binding.

### 3. Create a Feature Component
* Creating a reusable `HeroDetail` component;
* Using `props` binding to controls the child `HeroDetail` component from parent `Heroes` component;
* Using `props` property in the `@Options` decorator to access the `hero` property bound in the external `Heroes` component.

### 4. Add Services
* Refactoring data access to `HeroService` class;
* Using RxJS `of()` to return a `Observable` and mock an asynchronous call;
* Using the `provide()/inject()` functions to use the `HeroService` in the components;
* Calling the `HeroService`'s method in the component `setup()` function;
* Creating a `MessageService` store for loosely-coupled communication using the `vuex` and `vuex-module-decorators` libraries;
* Using the `useModule()` and `inject()` functions to inject the `MessageService` storage for further interaction;
* Passing the `MessageService` to the `HeroService` using the latter's constructor.

### 5. Add Navigation
* Add the `vue-router` library to navigate among different pages;
* Turning the `App` components into a navigation shell using `<router-link>` and the `<router-view>`;
* Configuring the `routes.ts` file;
* Defining routes, a redirect route and a parameterized route;
* Using the `<router-link>` components instead of anchor elements;
* Refactoring a tightly-coupled master/detail view into a routed detail view;
* Using `<router-link>` props to navigate;
* Using the `HeroService` in multiple components.

### 6. Get Data from a Server
* Instaling the `axios` library to make HTTP requests in the app;
* Refactoring the `HeroService` to load heroes from a web API;
* Extending the `HeroService` to support `post()`, `put()` and `delete()` methods;
* Updating the components to allow adding, editing and deleting heroes.

