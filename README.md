# Age of Empires

This is a website where user can see a collection of empires information in a data table user can filter and review empires and select one to goe the empire's single page
The website hae three main pages like the following:

- [x] Home page: that contain a hero section with explanation about Age Of Empires
- [x] Units: in this page the user can see all empires in a table with the ability to:
  - Toggle to display a certain collection according to the desired age.
  - User has a numeric slider with (min 0, max 200) "Food, Gold, Wood", the user can enable a slider and start filter sliding to certain number, **the list will be updated immediately while user is changing the value**
  - Expand or select the numbers of rows in the table. In addition to, pagination functionality,
  - Data table enables user to sort list by name or age
- [x] Age Unit Details: this page shows the details of the selected age from the table

## Libraries and technologies used in this source code

- `"@reduxjs/toolkit": "^1.6.2"`: state management system

- `"redux": "^4.1.2"`: state management system

- `"redux-thunk": "^2.4.1"`: state management system

- `"react-redux": "^7.2.6",`: state management system

- `"react-table": "^7.7.0"`: Create and control data table

- `"bootstrap": "^5.1.3"`: create a responsive layout

- `"react-bootstrap": "^2.0.3"`: create a responsive layout

- `"react-bootstrap-icons": "^1.6.1"`: : to use bootstrap icons

- `"sass": "^1.44.0"`: for writing styling script

- `"@mui/material": "^5.2.3"`: for using pre built component (slider)

- `"@testing-library/jest-dom": "^5.11.4"`: testing the code files

- `"@testing-library/react": "^11.1.0"`: testing the code files

- `"@testing-library/user-event": "^12.1.10"`: testing the code files

- `"react-router-dom": "^6.0.2"`: use to navigate between pages

## Future work can be done to improve the ui

- [] add authentication functionality

- [] add user reviews section in unit details to alow user to comment on a certain unit

- [] more sections in home page to show statistics about empires, and more explanation about them

- [] filtering functionality on each column on the data table in units page, so user can search by name, age, id or cost directly in the table

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
