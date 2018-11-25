# Simple currency rates SPA application made with React and Redux

This simple currency rates SPA application made using React framework together with Redux state managent system.

## Requirements

- Application is using data from https://api.exchangeratesapi.io/latest
- Initially there should be a button. Data is fetched when the button is clicked
- "Loading" message/UI component should be shown while data is fetched
- Error modal should be shown when data fetch fails
- Application parts should be tested
- React framework
- Application state management using Redux framework
- Pagination and styling is not necessary, table of exhange rates will be good enough

# Implementation details

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Third-party [npm](https://www.npmjs.com/) packages

- [moment.js](https://www.npmjs.com/package/moment) for parsing and formattind dates
- [numeral.js](https://www.npmjs.com/package/numeral) for formattind numbers
- [normalize.css](https://www.npmjs.com/package/normalize.css) for CSS reset
- [prop-types](https://www.npmjs.com/package/prop-types) for runtime type checking for React props.
- [react-modal](https://www.npmjs.com/package/react-modal) as modal dialog component for displaying errors
- [redux-thunk](https://www.npmjs.com/package/redux-thunk) for asynchronous actions
- [reduce-reducers](https://www.npmjs.com/package/reduce-reducers) to reduce multiple reducers into a single reducer from left to right
- [node-sass](https://www.npmjs.com/package/node-sass) was used to enable [SCSS](https://sass-lang.com/) language support in this project.

## Testing

All React componenets were tested. All Redux action creatots, reducers and selectors were tested.

- [Jest](https://jestjs.io/) was used as unit tests framework.
- [redux-mock-store](https://www.npmjs.com/package/redux-mock-store) was used to mock store for testing redux async action creators and middleware.
- For React component testing were used following [npm](https://www.npmjs.com/) packages: [enzyme](https://www.npmjs.com/package/enzyme), [enzyme-adapter-react-16](https://www.npmjs.com/package/enzyme-adapter-react-16), [jest-enzyme](https://www.npmjs.com/package/jest-enzyme), [react-test-renderer](https://www.npmjs.com/package/react-test-renderer).
- [jest-fetch-mock](https://www.npmjs.com/package/jest-fetch-mock) was used to mock [fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API).

## IDE, ESLint and Prettier

- [Visual Studio Code](https://code.visualstudio.com/) was used as IDE.
- [ESLint](https://www.npmjs.com/package/eslint) is already included in [Create React App](https://github.com/facebook/create-react-app) template. Only few settings were changes for this project in `.eslintrc` file.
- [Prettier](https://github.com/prettier/prettier) was used for code formatting in [Visual Studio Code](https://code.visualstudio.com/) and [ESLint](https://www.npmjs.com/package/eslint) plugin [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) was installed which allows Prettier violations to be reported as ESLint errors. All other settings for [Prettier](https://github.com/prettier/prettier) were default.

## Pull request demo

This section is added to demonstrate pull-request
