# gnNews

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
<br><br>
The app displays breaking headlines for a selected country from the list in the sidebar. Articles are sorted by the earliest date published first. The news are fetched from a public [News API](https://newsapi.org/). The news may be displayed as a list or in a grid system (change display in header). Maximum amount of fetched news from the News API is 100. They may be divided into pages with specific amount of news on a page.
<br>
The list of countries is fetched from the public [REST Countries API](https://restcountries.com/#rest-countries).

## Used tech
* React - version: ^18.2.0
* state: @reduxjs/toolkit - version: ^1.8.6 (state is persisted with redux-persist - version: ^6.0.0)
* Styled-Components - version: ^5.3.5
* TypeScript - version: ^4.7.4
* tests: @testing-library/react - version: ^13.4.0

For modal creation I used react-modal.

## Getting Started

#### Requirement:
- node : 16.x.x or above
- npm : 8.x.x or above

#### Clone this repo:
`git clone https://github.com/ida-dar/gnNews.git`

#### Navigate to the root folder and install all dependencies:

- `yarn` or `npm install`

#### Start Development Mode:

- `yarn start` or `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
- Happy Hacking!

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.
