# react-webpack-boilerplate
A boilerplate code that contains enough configurations to bootstrap a new React Webpack project

# Installation
- git clone https://github.com/hiteshparashar4/react-webpack-boilerplate.git
- cd react-webpack-boilerplate
- npm install

# Running
- npm run start
- Open browser and go to url http://localhost:8085/


# Features
- Bootstrap a React app with basic required features already built in
- Module bundling using Webpack
- Webpack Dev Server. Run app on local server
- scss/css support
- Extracks scss/css code into a saperate bundle file
- Extracts images to output bundle directory
- eslint for checking common syntax errors in the code to ensure code quality
- Source maps to easily debug the js code in browser dev tools (dev mode only)

# Common Commands
- npm run start => starts a local dev server to run the application on your system
- npm run lint => runs lint checks and reports for any syntax errors in the code
- npm run lint:fix => runs lint checks, tries to fix some common errors automatically, and reports for any other syntax errors in the code
- npm run dev => creates build in development mode.
- npm run build => creates build in production mode. Minifies and compresses the build files.

# Important
- Linting process follows eslint recommended checks by default - https://eslint.org/docs/rules/
