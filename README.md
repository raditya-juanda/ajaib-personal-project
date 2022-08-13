# Ajaib Personal Project
This project contains the web app source code for Ajaib Personal Project. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to setup and run locally
You can run these commands in your terminal:
```
git clone
cd ajaib-personal-project
npm install
npm run husky:prepare
npm run start
```
It should open the app in your browser, or you could access it at [http://localhost:3000](http://localhost:3000).
  

## Available Scripts
| Package Name | Usage |
|--|--|
|npm run start| Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The page will reload when you make changes. |
|npm run build|Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.|
|npm run eject|**Note: this is a one-way operation. Once you `eject`, you can't go back!** If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project. Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own. You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.|
|npm run test:watch|Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.|
|npm run test|Launches the test runner once.|
|npm run test:coverage|Launches the test runner once and check code coverage.|
|npm run lint|Scan Javascript codes using eslint|
|npm run lint:style|Scan css codes using stylelint|
|npm run husky:prepare|Setup husky locally (first time only when setting up the project)|


## Additional Packages
| Package Name | Usage |
|--|--|
|[antd](https://ant.design/)| A design system which contains common components & icons |
|[tailwindcss](https://tailwindcss.com/)| Utility first css frameworks |
|[dayjs](https://day.js.org/)|Lightweight library for dates and times operations|
|[eslint](https://eslint.org/)|Javascript's linter|
|[stylelint](https://stylelint.io/)|CSS' linter|
|[husky](https://typicode.github.io/husky/#/)|Git hooks to listen to git events|
|[lint-staged](https://github.com/okonet/lint-staged)|Run linters on staged files|


## Optimization
There are some optimizations done in this project:
1. Isolate search input as another component with it's value state. So that when `onChange` event triggered and we need to set the input value, other components won't re-render. 
2. Splitting the context into 2, the state and the setter. So that some components that only needs the setter does not need to re-render on state change. (e.g. Reset Button in `TableFilters.jsx`) 
3. Preconnect to other domains. In this case `https://randomuser.me`, to let the browser know we'll be connecting to that domain. This should reduce the time browser's use to perform DNS lookup and connecting to the domain.


## Learn More
You can check out [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started) for additional configs.
To learn React, check out the [React documentation](https://reactjs.org/).
