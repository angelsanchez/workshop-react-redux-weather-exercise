[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

# Workshop React + Redux

## Weather Exercise

The goal is implement all application components (action creators, reducers, sagas, React components,...).
You should fix the unit tests to achieve the goal. 
 

### Instructions

#### 1. Install npm dependencies

```
npm install
```

#### 2. Fix tests implementing application components

```
npm test
```

You can use a watcher to save time:

```
npm run test:watch
```

#### 3. You can test manually the application starting a dev server with Hot Module Replacement & Redux dev-tools:

```
npm run server:dev
```

Open a browser and visit `http://localhost:3000`

#### 4. The application is ready to be deployed

Run the following command which will compile all the necessary files in a `/dist` folder.

```
npm run build
```

After this you can start a production server for testing:

```
npm start
```

## Code style

This project is using the [standard](http://standardjs.com/) rules:

```
npm run lint
```

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
