# Food Recipe App

## Overview
In this tutorial, we will be creating a food recipe application that can help a cook figure out any recipe of any desired food material.
The app will be using an external API to populate all the information on different food recipes and their respective amount of calories. The key things we will explore is how to:
- Design the user interaction
- Access the API with [edamam](https://www.edamam.com/)
- Integrate the application with the external API

## Prerequisites
- Install [react](https://reactjs.org/)
- Install the code editor preferably [Visual Studio Code](https://code.visualstudio.com/)
- Have an account with [edamam](https://www.edamam.com/)

## Design the user interaction
In this app we've designed only two widgets namely;
- a `Search` button
- a textfield

The use of a button is to triger the listener in the event that the user clicks on it and the use of a textfield is where the user types any food material that they would want  to find out their respective recipes.

## API Access
Go to https://www.youtube.com/watch?v=JcOiP8y9gpI&feature=youtu.be and follow my youtube tutorial on API access

## API Integration with the app
- Copy the `APPlication ID` 
- Copy the `Application Key`
- Copy the `GET` request link from the `Documentation` tab

Finally paste each one of the above in your code accordingly

## Deployment
- Open `command prompt` and navigate to your project directory or folder and type `npm run build` and press `Enter` key

OR (if Git is installed on your machine)

- Navigate to your project directory 
- Right click and select Git Bash here 
- Type `npm run build` and press `Enter` key
- The `build` folder will appear in your project directory
- Create an account with [Netlify](https://www.netlify.com/)
- Finally, drag and drop the `build` folder for upload and the application would have been hosted

## Demonstration (How the app works)
Click [here](https://www.youtube.com/watch?v=mximojRMnLk&feature=youtu.be) for demonstration

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
