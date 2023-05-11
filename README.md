# React Realtime Price Ticker Project

## Project Overview

This is a project that aims to display real-time price tickers data on the user interface. The primary goal is to illustrate the practical use of React and Socket.IO to create a real-time data streaming application. This project mimics the price changes section seen on the [Google Finance](https://www.google.com/finance/) page.

## Features

The application connects to a locally running service that emits real-time price data. The main features of the application include:

- Display of real-time price changes for various tickers.
- Additional visual effects to highlight positive or negative price changes.
- User functionality to delete/create tickers.
- User functionality to specify the interval time.
- Graphical display of price change history.

## Technologies Used

- React (with hooks)
- Redux (with Redux-Thunk)
- Socket.io
- Just pure SCSS
- Testing Library

## Running the Project Locally

### Running the Local Service

1. Open a new bash shell
2. Navigate to the server directory with `cd server`
3. Install dependencies with `npm install` or `yarn install`
4. Start the service with `npm run start` or `yarn start`
5. Visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

### Running the React Application

1. Open a new bash shell
2. Navigate to the client directory with `cd client`
3. Install dependencies with `npm install` or `yarn install`
4. Start the application with `npm run start` or `yarn start`

### Running Tests

1. Open a new bash shell
2. Navigate to the client directory with `cd client`
3. Run tests with `npm run test` or `yarn test`

## Price Service Usage

URL: `http://localhost:4000`

The service emits real-time price tickers data via web-sockets.

We are using the following tickers:

- **AAPL** - Apple
- **GOOGL** - Alphabet
- **MSFT** - Microsoft
- **AMZN** - Amazon
- **FB** - Facebook
- **TSLA** - Tesla

## Contribution

Feel free to clone or fork this repository, make changes, and send me a pull request. Happy coding!
