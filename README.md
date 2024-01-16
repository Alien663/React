# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run analyze`

Launches the Source map explorer analyzes JavaScript bundles using the source maps. This helps you understand where code bloat is coming from.

## Before Build Project

### `onAfterSetupMiddleware is deprecated` or `onBeforeSetupMiddle is deprecated`

Find the file : `node_modueles/react-scripts/config/webpackDevServer.config.js`

Go to the bottom of the file and find scripts as bellow:

```js
onBeforeSetupMiddleware(devServer) {
    // Keep `evalSourceMapMiddleware`
    // middlewares before `redirectServedPath` otherwise will not have any effect
    // This lets us fetch source contents from webpack for the error overlay
    devServer.app.use(evalSourceMapMiddleware(devServer));

    if (fs.existsSync(paths.proxySetup)) {
        // This registers user provided middleware for proxy reasons
        require(paths.proxySetup)(devServer.app);
    }
},
onAfterSetupMiddleware(devServer) {
    // Redirect to `PUBLIC_URL` or `homepage` from `package.json` if url not match
    devServer.app.use(redirectServedPath(paths.publicUrlOrPath));

    // This service worker file is effectively a 'no-op' that will reset any
    // previous service worker registered for the same host:port combination.
    // We do this in development to avoid hitting the production cache if
    // it used the same host and port.
    // https://github.com/facebook/create-react-app/issues/2272#issuecomment-302832432
    devServer.app.use(noopServiceWorkerMiddleware(paths.publicUrlOrPath));
},
```

Replace as :

```js
setupMiddlewares: (middlewares, devServer) => {
    if (!devServer) {
        throw new Error('webpack-dev-server is not defined')
    }

    if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(devServer.app)
    }

    middlewares.push(
        evalSourceMapMiddleware(devServer),
        redirectServedPath(paths.publicUrlOrPath),
        noopServiceWorkerMiddleware(paths.publicUrlOrPath)
    )

    return middlewares;
},
```
