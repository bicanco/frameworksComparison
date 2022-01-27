# Tour Of Heroes - Nextjs(React)

## Project setup
```
yarn install
```

### Serve
Run `yarn dev` and navigate to `http://localhost:3000/`.

### Run json server
Run `yarn run db`. The resources are available at `http://localhost:4000`.

### Initial Setup
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with the following command:
```
yarn create next-app --ts
```

### 1. The Hero Editor
* Creating the function component `Heroes`;
* Displaying the `Heroes` component by adding it to the `App` component declared in the `index.tsx`;
* Using a auxiliary function `uppercase` to format the name;
* Binding the component's value and state to control the form;

### 2. Display a List
* Displaying a list of heroes by mapping an array and binding the `key`;
* Binding the `onClick` event;
* Condicionaly displaying the hero's details, if one is selected, using the `&&` operator;
* Binding css classes, using the `classnames` library to simplify the code.

### 3. Create a Feature Component
* Creating a reusable `HeroDetail` component;
* Using props binding to controls the child `HeroDetail` component from parent `Heroes` component;
* Using a interface to type the exposed props for binding by the external `Heroes` component.

### 4. Add Services
* Refactoring data access to `useHeroService` hook;
* Using RxJS `of()` to return a `Observable` and mock an asynchronous call;
* Using the `useEffect` hook to call the `HeroService`'s method;
* Returning a state in the `useHeroService` to prevente `useEffect` triggering again;
* Creating a `MessageService` store for loosely-coupled communication using the `react-redux` library;
* Creating `useAppDispatch` and `useAppSelector` hooks for using typed versions of the `useDispatch` and `useSelector` hooks;
* Using the `useAppDispatch` to interact with the `MessageService` storage;
* Using the `useMessageService` hook to acess the `MessageService` store`s state in the `Messages` component.

### 5. Add Navigation
* Creating a navigation shell using into the `App` altering the `_app.tsx` file;
* Configuring the routes by creating `index.tsx` files in subfolders in the `pages` folder;
* Adding a `[id].tsx` file to create a parameterized route;
* Altering the `next.config.js` to redirect a route;
* Using the `Link` component around anchor elements;
* Refactoring a tightly-coupled master/detail view into a routed detail view;
* Using `Link` component props to navigate;
* Using the `useHeroService` hook in multiple components.

### 6. Get Data from a Server
* Using the `fetch` API to make HTTP requests in the app;
* Refactoring the `useHeroService` to load heroes from a web API;
* Extending the `HeroService` to support `post()`, `put()` and `delete()` methods;
* Updating the components to allow adding, editing and deleting heroes.
