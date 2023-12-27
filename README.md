# The Dog API

#### Video Demo: <https://youtu.be/-qF0OrmZQMk>

#### Description:

For this project, I decided to use React jsx. Everything below "Getting Started with Create React App" in this readme file is included by default upon creating a React app. However, here at the top, I will explain my project.

I recently learned about API's and wanted to create a project that uses an API to fetch some data to be used in some way. I did some searching on the web to find some free API's and came across The Dog API. When I saw that the DOG API website included data that was sorted by breed as well as multiple pictures per breed, I got the idea to create a web-based application that fetches x number of pictures (can be inputted by the user) of a specific breed (can also be selected by the user) and displays the pictures in the browser. This is achieved on the home page (MainApp.jsx).

To display the pictures on the MainApp page, the user must first press the "Load the Breeds" button to load/fetch the breed list from the API. This list is then displayed inside of the select box to the left of the button. The user must then select a breed. Following this, the user must enter the number of pictures they wish to see of the selected breed in the text box below. The user must then press the "Load Pictures" button. The pictures should now be displayed below.

Because of the nature of creating a react app (many files are created for you to help get you started), the only files I created myself are within the "components" folder. This folder contains files for four components: AllDogs.jsx, Footer.jsx, Header.jsx, and MainApp.jsx. MainApp is explained above in the previous paragraph. However, Header and Footer are constantly displayed even when the content of the main page changes upon clicking the "All Dogs" link. This link renders the content of AllDogs.jsx into the browser while keeping the Header and Footer at the top and bottom. The Header and Footer will also stay when returning to the Home page (MainApp). The function of the AllDogs page is that it displays one picture per breed in the database. There is something like 106 breeds in the database. Therefore the AllDogs page fetches one random picture per breed and displays them in the browser.

- I also included a link to the Dog API website in the header from which I fetched the data for this application.

The only other files where I made changes are in App.js and index.css. App.js is made up of a router which takes care of changing pages between MainApp and AllDogs while maintaining the Header and Footer at the top and bottom of the webpage at all times. index.css is where I included my css code for styling the website. The rest of the files do not directly affect the functioning of the website and therefore I did not interact with them at all (they are created by default upon creating a react app).

A quick note on the css styling used in my index.css file. I decided to keep the colors minimalist (black, grey, and white) to place focus on the pictures rather than the rest of the site. I also used things like "display: flex" and "flex-wrap: wrap" on all of the components so that the web page is responsive to different sizes. For example, in full desktop browser size, the pictures will typically display in rows of 2-4 pictures. However, if the browser size is reduced, the flex-wrap alows them to be reduced to rows of one.

I am sure you are familiar with running React applications. Though if you are not, please see the below terminal commands which will show you how to launch the application.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

You may also need to install node modules for the application to run properly.

### `npm install`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
