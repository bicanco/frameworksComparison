# Tour Of Heroes - Vue3

## Project setup
```
yarn install
```

### Serve
Run `yarn serve` and navigate to `http://localhost:8080/`.

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
