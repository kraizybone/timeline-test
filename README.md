This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
I used ``eject command`` for better project customization.
# Requirements
You need to have [Node.js](https://nodejs.org/en/) and npm installed.
```
"engines" : {
    "node" : ">=8.0.0"
},
```
# Instalation
```sh
yarn install
```
or
```sh
npm install
```
# Start test server
In order to run application correctly you need to start test server.
You can change hostname and port in ```.env``` file.
```sh
yarn server
```
or
```sh
npm run server
```
# Start application
```sh
yarn start
```
or
```sh
npm run start
```
## Buld application
Builds the app for production to the ```build``` folder.
```sh
yarn build
```
or
```sh
npm run build
```
## Regenerate db
For db engine I used SQLite, which stores all data in one file ```data.sqlite```. You can change test data in database by runnig command:
```sh
yarn db-sync
```
or
```sh
npm run db-sync
```
### Test Server
For test server I used these libraries:
- [express.js](https://expressjs.com/) - node framework
- [SQLIte](https://www.sqlite.org/about.html) - db engine
- [Seqluelize](http://docs.sequelizejs.com/) - promise-based ORM, DB models
- [GraphQL](https://graphql.org/) - query language for API
### Client side
For client side I used these libraries:
- [React](https://reactjs.org/)
- [React Redux](https://github.com/reactjs/react-redux) - handling app state
- [Redux saga](https://redux-saga.js.org/) - handling application side effects (async calls...)
- [React router v4](https://reacttraining.com/) - App routing
- [apollo-fetch](https://github.com/apollographql/apollo-fetch) - lightweight client for GraphQL
- [react-redux-toastr](https://github.com/diegoddox/react-redux-toastr) - notification messages
- [lodash](https://lodash.com/) - utility library
- [Sass](https://sass-lang.com/) - css preprocessor
