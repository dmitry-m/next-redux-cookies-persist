  <div align="center">
  <h1 align="center">Next.js SSR auth app for user management with Redux which persists cookies</h1>
  <h3>◦ Developed with the software and tools below.</h3>
  <p align="center"><img src="https://img.shields.io/badge/-Next.js-004E89?logo=Next.js&style=flat-square" alt='Next.js\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-React-004E89?logo=React&style=flat-square" alt='React\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Redux-004E89?logo=Redux&style=flat-square" alt='Redux\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-TypeScript-004E89?logo=TypeScript&style=flat-square" alt='TypeScript\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-Tailwind%20CSS-004E89?logo=Tailwind%20CSS&style=flat-square" alt='Tailwind CSS\' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" /><img src="https://img.shields.io/badge/-PostCSS-004E89?logo=PostCSS&style=flat-square" alt='PostCSS"' />
<img src="https://via.placeholder.com/1/0000/00000000" alt="spacer" />
  </p>
  </div>
  
  ---
  ## 📚 Table of Contents
  - [📚 Table of Contents](#-table-of-contents)
  - [🔍 Overview](#-overview)
  - [🚀 Getting Started](#-getting-started)
  - [🌟 Features](#-features)
  - [📁 Repository Structure](#-repository-structure)
  - [💻 Code Summary](#-code-summary)

---

## 🔍 Overview

This is a Next.js project with a TypeScript configuration. The main feature of the application is server rendering based on redux storage which persists using cookies. API requests are sent with a JWT token using RTK Query and Axios. The project includes a variety of components, hooks, and services for handling authentication, user management, and API requests, also utilizes Tailwind CSS for styling and PostCSS for processing styles. The codebase is well-organized and follows best practices for Next.js and TypeScript development. The project also includes a `Dockerfile`, `docker-compose.yml` files for running the application in a Docker container.

---

## 🚀 Getting Started

To get started with this project, follow these steps:<br>

1. Install the dependencies by running `yarn install`.
2. Rename a `copy.env` file to `.env` and change environment variables if necessary.
3. Start the development server by running `yarn run dev` or `docker compose up -d`
4. For backend copy and run the application from the git-repository https://github.com/dmitry-m/nest-user-auth-and-crud
5. Access the application by navigating to http://localhost:3000 in your web browser

---

## 🌟 Features

The project includes the following features:<br>

- Server rendering based on redux storage which persists using cookies
- All components used for pages, layout, navigation, and loading indicators are custom
- Authentication and authorization using NextAuth.js and TypeScript
- User management with user profiles, login, and signup pages
- API requests using RTK Query and Axios
- Utility functions for formatting data and handling errors
- A well-organized and modular codebase with a clear separation of concerns
- Support for both Next.js and TypeScript development

---

## 📁 Repository Structure

```sh
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierrc
├── .stylelintrc
├── copy.env
├── docker-compose.yml
├── Dockerfile
├── next-env.d.ts
├── next.config.js
├── package.json
├── pages
│   ├── 404.tsx
│   ├── admin.tsx
│   ├── auth
│   │   ├── login.tsx
│   │   └── signup.tsx
│   ├── index.tsx
│   ├── profile.tsx
│   ├── users
│   │   └── [id].tsx
│   ├── _app.tsx
│   └── _document.tsx
├── postcss.config.js
├── prettier.config.js
├── README.md
├── src
│   ├── components
│   │   ├── FullPageLoader
│   │   │   ├── FullPageLoader.props.ts
│   │   │   └── FullPageLOader.tsx
│   │   ├── index.ts
│   │   ├── Layout
│   │   │   ├── Layout.module.scss
│   │   │   ├── Layout.props.ts
│   │   │   └── Layout.tsx
│   │   ├── MainProvider
│   │   │   ├── AuthProvider.tsx
│   │   │   └── MainProvider.tsx
│   │   ├── Meta
│   │   │   ├── Meta.props.ts
│   │   │   └── Meta.tsx
│   │   ├── Navbar
│   │   │   └── Navbar.tsx
│   │   ├── ThemeSwitcher
│   │   │   ├── ThemeSwitcher.module.scss
│   │   │   ├── ThemeSwitcher.props.ts
│   │   │   └── ThemeSwitcher.tsx
│   │   └── ui
│   │       ├── H
│   │       │   ├── H.module.scss
│   │       │   ├── H.props.ts
│   │       │   └── H.tsx
│   │       ├── index.ts
│   │       └── Input
│   │           ├── Input.props.ts
│   │           └── Input.tsx
│   ├── hooks
│   │   ├── index.ts
│   │   └── useAuthRedirect.ts
│   ├── icons
│   │   ├── Basket.svg
│   │   ├── Email.svg
│   │   ├── index.ts
│   │   ├── Lock.svg
│   │   ├── Moon.svg
│   │   ├── Sun.svg
│   │   └── User.svg
│   ├── screens
│   │   ├── Admin
│   │   │   └── Admin.tsx
│   │   ├── Home
│   │   │   └── Home.tsx
│   │   ├── index.ts
│   │   ├── LogIn
│   │   │   ├── LogIn.module.scss
│   │   │   ├── LogIn.props.ts
│   │   │   └── LogIn.tsx
│   │   ├── Page404
│   │   │   └── Page404.tsx
│   │   ├── Profile
│   │   │   └── Profile.tsx
│   │   ├── SignUp
│   │   │   ├── SignUp.props.ts
│   │   │   └── SignUp.tsx
│   │   └── User
│   │       └── User.tsx
│   ├── services
│   │   ├── api
│   │   │   └── apiWithReAuth.ts
│   │   ├── auth.service.ts
│   │   └── index.ts
│   ├── store
│   │   ├── index.ts
│   │   ├── query
│   │   │   ├── queryWithReAuth.ts
│   │   │   └── userQuery.ts
│   │   ├── store.ts
│   │   └── user
│   │       ├── user.actions.ts
│   │       └── user.slice.ts
│   ├── types
│   │   ├── auth.types.ts
│   │   ├── index.ts
│   │   └── user.types.ts
│   └── utils
│       ├── capitalize.ts
│       ├── catchError.ts
│       ├── clearText.ts
│       ├── formatVotes.ts
│       ├── index.ts
│       ├── makeShortString.ts
│       └── MatchDecorator.ts
├── styles
│   ├── globals.css
│   └── _mixins.scss
├── tailwind.config.js
└── tsconfig.json

```

---

## 💻 Code Summary

i organized my codebase into various directories and files to maintain a clean and structured project. Here's a brief summary of the important files and directories:<br>

- Root: Configuration files for Next.js, PostCSS, and Prettier.
- Pages: Next.js page components for different routes and screens.
- Components: Reusable UI components and providers used throughout the application.
- Hooks: Custom hooks for handling authentication and redirection.
- Icons: SVG icons used in the application.
- Screens: React components for different screens and pages in the application.
- Services: API client and authentication service.
- Store: Redux store, actions, and reducers for user management and queries.
- Types: TypeScript interfaces and types used in the project.
- Utils: Utility functions for formatting and manipulating text.

## I hope you find my Next.js SSR Auth App for User Management with Redux helpful and easy to navigate. Happy coding!

<details><summary>Root</summary>

| File               | Summary                                                                                                                                                                                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| next-env.d.ts      | The code defines a Next.js project with TypeScript support and imports the necessary types for the `next/image` module.                                                                                                                                                |
| next.config.js     | The code defines a Next.js configuration object that enables various features, including React Strict Mode, SWC minification, and custom rewrites for API requests. It also configures the Webpack module loader to handle SVG files using the `@svgr/webpack` plugin. |
| postcss.config.js  | The code defines a PostCSS configuration file that enables the use of Tailwind CSS, Autoprefixer, and postcss-lighten-darken plugins.                                                                                                                                  |
| prettier.config.js | The code defines a module that exports an object with a plugins property, which is an array containing the prettier-plugin-tailwindcss plugin.                                                                                                                         |
| tailwind.config.js | The code defines a Tailwind CSS configuration file that sets up the content, theme, and plugins for a project.                                                                                                                                                         |

</details>

---

<details><summary>\pages</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                          |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 404.tsx        | The code defines a function called ErrorPage that returns a JSX element of the Page404 component.                                                                                                                                                                                                                                |
| admin.tsx      | The code defines an AdminPage component that renders the Admin screen, and exports it with a getServerSideProps function for server-side rendering.                                                                                                                                                                              |
| index.tsx      | The code defines a server-side rendered React component called `HomePage` that renders the `Home` component, and exports it with a `getServerSideProps` function that returns an empty object.                                                                                                                                   |
| profile.tsx    | The code defines a React component called `ProfilePage` that renders the `Profile` component and exports it as a default export. It also defines a `getServerSideProps` function that is used for server-side rendering and returns an empty object as props. Additionally, the component has an `auth` property set to user     |
| \_app.tsx      | The code defines a custom Next.js app component that initializes Yandex Metrika tracking and sets up route change events to track page views.                                                                                                                                                                                    |
| \_document.tsx | The code defines a custom Next.js document component, `MyDocument`, which extends the default `Document` component from Next.js. It adds a `canonical` property to the initial props of the document and sets it to the canonical URL of the page. Additionally, it includes various meta tags for SEO and social media sharing. |

</details>

---

<details><summary>\pages\auth</summary>

| File       | Summary                                                                                                                                                                                                     |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| login.tsx  | The code defines a React component named `LoginPage` that renders the `LogIn` component, and exports it along with a server-side prop getter function using the `wrapper` function from the `store` module. |
| signup.tsx | The code defines a SignUpPage component that renders the SignUp screen, and exports it along with a getServerSideProps function for server-side rendering.                                                  |

</details>

---

<details><summary>\pages\users</summary>

| File     | Summary                                                                                                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id].tsx | The code defines a React component called UserPage, which renders the User component and exports it as a default export. It also defines a getServerSideProps function that is used for server-side rendering and returns an empty object as props. Additionally, the auth property of the UserPage component is set to user |

</details>

---

<details><summary>\src\components\FullPageLoader</summary>

| File                    | Summary                                                                                                                                                                    |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FullPageLoader.props.ts | The code defines an interface for a full-page loader component in React, with a single property that extends the HTMLAttributes interface and is applied to a div element. |
| FullPageLOader.tsx      | The code defines a functional component called FullPageLoader that renders a loading indicator with a large size and primary color.                                        |

</details>

---

<details><summary>\src\components</summary>

| File     | Summary                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| index.ts | The code exports various components from the Meta, MainProvider, Logo, Layout, Navbar, ThemeSwitcher, and FullPageLoader directories. |

</details>

---

<details><summary>\src\components\Layout</summary>

| File            | Summary                                                                                                                                                                                      |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Layout.props.ts | The code defines an interface called `LayoutProps` that extends the `HTMLAttributes` interface and includes a `className` property, which is used to define the class name of a div element. |
| Layout.tsx      | The code defines a layout component for a Next.js application, using the Inter font from Google Fonts and importing styles from a custom SCSS module.                                        |

</details>

<details><summary>\src\components\MainProvider</summary>

| File             | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| AuthProvider.tsx | The code defines an `AuthProvider` component that provides authentication functionality to its children components. It uses the `useRouter`, `useTheme`, and `useEffect` hooks from Next.js, React-Toastify, and React respectively to handle routing, theme management, and effectful side effects. The component checks if the user is authenticated based on the `Component.auth` property and redirects to a 404 page or the login page if necessary. If the user is authenticated, it renders its children components wrapped in a `ToastContainer` component with a custom theme. |
| MainProvider.tsx | The code defines a custom React component called `MainProvider` that wraps other components in a Next.js application, including a theme provider, a progress bar, an authentication provider, and a layout component. It also provides a store for the application using the `wrapper.useWrappedStore()` method.                                                                                                                                                                                                                                                                        |

</details>

---

<details><summary>\src\components\Meta</summary>

| File          | Summary                                                                                                                                                                                   |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Meta.props.ts | The code defines an interface for a component's props, including children, title, description, and image.                                                                                 |
| Meta.tsx      | The code defines a React component called Meta that generates HTML meta tags for the page title, description, and image. It also includes a fallback for when no description is provided. |

</details>

---

<details><summary>\src\components\Navbar</summary>

| File       | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Navbar.tsx | The code defines a React component called Navbar, which renders a navigation bar with a logo, a theme switcher, and a dropdown menu for accessing user-related pages. The component uses the Next.js Link component to create links to different pages, and it also uses the useRouter hook from Next.js to handle routing. Additionally, it uses the useAppSelector and useAppDispatch hooks from the Redux store to access the current user's access token and dispatch logout actions. |

</details>

---

<details><summary>\src\components\ThemeSwitcher</summary>

| File                   | Summary                                                                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| ThemeSwitcher.props.ts | The ThemeSwitcherProps interface defines a React component's props for a theme switcher, including the size property.                      |
| ThemeSwitcher.tsx      | The code defines a React component called ThemeSwitcher that allows the user to toggle between light and dark themes using an icon button. |

</details>

---

<details><summary>\src\components\ui\H</summary>

| File       | Summary                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| H.props.ts | The code defines an interface for a component called HProps, which includes a tag property that can be either h1 h2 or h3 and a children property that is of type ReactNode. |
| H.tsx      | The code defines a React component called H that renders an HTML heading element (h1, h2, or h3) based on the tag prop, and applies styles from a SCSS file.                 |

</details>

---

<details><summary>\src\components\ui</summary>

| File     | Summary                                                                |
| -------- | ---------------------------------------------------------------------- |
| index.ts | The code exports all symbols from the ./Input/Input and ./H/H modules. |

</details>

---

<details><summary>\src\components\ui\Input</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Input.props.ts | The code defines an interface called InputProps that extends the HTMLInputElement properties and includes additional fields for isTouched, error, and Icon.                                                                                                                                                                                                                                                                  |
| Input.tsx      | The code defines a React component called Input that renders an input field with a label, error message, and icon. The component accepts various props such as className, error, name, id, isTouched, title, Icon, and others. It also uses the `clsx` library to generate class names for the input and its label based on the provided props. The component is exported and can be used in other parts of the application. |

</details>

---

<details><summary>\src\hooks</summary>

| File               | Summary                                                                                                                                    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| index.ts           | The code exports all members from the ./useAuthRedirect module.                                                                            |
| useAuthRedirect.ts | The code defines a custom hook called `useAuthRedirect` that checks if the user is logged in and redirects to a specified URL if they are. |

</details>

---

<details><summary>\src\icons</summary>

| File     | Summary                                                                                             |
| -------- | --------------------------------------------------------------------------------------------------- |
| index.ts | The code exports symbols from several SVG files, likely for use in a larger project or application. |

</details>

---

<details><summary>\src\screens\Admin</summary>

| File      | Summary                                                                                                                                                                                               |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Admin.tsx | The code defines a Next.js page component called Admin that fetches a list of users from an API and displays them in a grid, with each user's email and admin status displayed in a card-like format. |

</details>

---

<details><summary>\src\screens\Home</summary>

| File     | Summary                                                                                                                               |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Home.tsx | The code defines a functional component called `Home` that renders a list of links based on the user's access token and admin status. |

</details>

---

<details><summary>\src\screens</summary>

| File     | Summary                                                                                               |
| -------- | ----------------------------------------------------------------------------------------------------- |
| index.ts | The code exports all components from the specified modules for use in other parts of the application. |

</details>

---

<details><summary>\src\screens\LogIn</summary>

| File           | Summary                                                                                                                                                                                                                                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| LogIn.props.ts | The code defines a class called LogInForm with two properties: password and email, both of which are validated using the class-validator library.                                                                                                                                                                                                 |
| LogIn.tsx      | The code defines a React component called LogIn that renders a form for logging in to an application. It uses the react-hook-form library to handle form submission and validation, and the class-validator library to validate the form data. The component also imports several other components and hooks from other parts of the application. |

</details>

---

<details><summary>\src\screens\Page404</summary>

| File        | Summary                                                                                                     |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| Page404.tsx | The code defines a React component called Page404 that renders a 404 error page with a title and a message. |

</details>

---

<details><summary>\src\screens\Profile</summary>

| File        | Summary                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Profile.tsx | The code defines a React component called Profile that renders a form with a checkbox to toggle the user's admin status, using Redux to manage state and dispatch actions. |

</details>

---

<details><summary>\src\screens\SignUp</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SignUp.props.ts | The code defines a class called SignUpForm with three properties: password, passwordConfirm, and email, which are validated using the class-validator library.                                                                                                                                                                                                                                                             |
| SignUp.tsx      | The code defines a React component called SignUp that renders a form for registering a new user. It uses the react-hook-form library to handle form validation and submission, and the class-validator library to validate the form data against a set of predefined rules. The component also uses the useAuthRedirect hook to check if the user is already logged in, and redirects them to the login page if necessary. |

</details>

---

<details><summary>\src\screens\User</summary>

| File     | Summary                                                                                                                                                                                                                                       |
| -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| User.tsx | The code defines a React component that displays information about a user, including their email and whether they are an admin. It also includes a button to delete the user, which triggers a mutation to delete the user from the database. |

</details>

---

<details><summary>\src\services\api</summary>

| File             | Summary                                                                                                                                        |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| apiWithReAuth.ts | The code defines an API client using Axios, with a token interceptor that adds an authorization header to requests based on the user's tokens. |

</details>

---

<details><summary>\src\services</summary>

| File            | Summary                                                                                                                                                     |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auth.service.ts | The code defines a service for authentication and authorization, with functions for registering, logging in, getting new tokens, and changing admin status. |
| index.ts        | The code exports all members from the ./auth.service module, making them available for use in other parts of the application.                               |

</details>

---

<details><summary>\src\store</summary>

| File     | Summary                                                                                                                                                                                                                                                                            |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| index.ts | The code exports all symbols from the store, user actions, and user query files.                                                                                                                                                                                                   |
| store.ts | The code defines a Redux store with a user reducer, a query reducer, and a cookie middleware for persisting data in the browser's cookies. It also exports various types and functions for working with the store, including `useAppDispatch`, `useAppSelector`, and `selectUser`. |

</details>

---

<details><summary>\src\store\query</summary>

| File               | Summary                                                                                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| queryWithReAuth.ts | The code defines a function called `baseQueryWithReAuth` that wraps the `fetchBaseQuery` function from `@reduxjs/toolkit/query`. It adds a mutex to prevent concurrent requests and re-authenticates the user if the initial request fails with a 401 status code. |
| userQuery.ts       | The code defines a Redux Toolkit query API for managing user data, including fetching a list of users and individual users, as well as deleting users.                                                                                                             |

</details>

---

<details><summary>\src\store\user</summary>

| File            | Summary                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| user.actions.ts | The code defines a set of asynchronous thunks for authentication-related actions, including registering, logging in, changing user roles, and logging out.                                                                                                                                                                                          |
| user.slice.ts   | The code defines a Redux slice for managing user data, including the user's authentication tokens and preferences. It includes reducers for handling various user actions, such as registering, logging in, and toggling the user's admin status. The slice also includes an extraReducer that handles hydration of the user state from the server. |

</details>

---

<details><summary>\src\types</summary>

| File          | Summary                                                                                                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| auth.types.ts | The code defines several types and interfaces related to Next.js, including `NextPageAuth`, `MainProviderProps`, `AuthProviderProps`, `PropsAndStore`, and `ExtendedAppProps`. |
| index.ts      | The code exports all types from the user.types and auth.types files, making them available for use in other parts of the application.                                          |
| user.types.ts | The code defines a set of interfaces for an authentication system, including User, Tokens, AuthResponse, EmailPasswordInput, IsAdminInput, and UserInitialState.               |

</details>

---

<details><summary>\src\utils</summary>

| File               | Summary                                                                                                                                                                                                                                                                                                                                      |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| capitalize.ts      | The code exports a function called `capitalize` that takes a string as an argument and returns the string with the first letter capitalized.                                                                                                                                                                                                 |
| catchError.ts      | The code defines a function `errorMessage` that takes an error object and returns a string representation of the error message. If the error is an AxiosError, it extracts the error message from the response data and joins it with commas if it's an array. Otherwise, it returns the error message or the error stack trace as a string. |
| clearText.ts       | The code defines a function called `clearText` that takes a string and an optional number as arguments, and returns a new string with HTML tags, special characters, and emojis removed. If the optional limit argument is provided, the returned string will be truncated to the specified length with a trailing ellipsis.                 |
| formatVotes.ts     | The code defines a function `formatVotes` that formats a number by inserting spaces every 3 digits, making it more readable.                                                                                                                                                                                                                 |
| index.ts           | The code exports various utility functions for formatting and manipulating text.                                                                                                                                                                                                                                                             |
| makeShortString.ts | The code defines a function `makeShortString` that takes a string and a maximum length as input, and returns a shortened version of the string with ellipses added if it exceeds the maximum length.                                                                                                                                         |
| MatchDecorator.ts  | The code defines a custom validation decorator called Match that checks if the value of a property on an object matches the value of another property.                                                                                                                                                                                       |

</details>
