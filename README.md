# react-webpack-boilerplate
A boilerplate code that contains minimum configurations to bootstrap a new React Webpack project

# Installation
- git clone https://github.com/hiteshparashar4/react-webpack-boilerplate.git
- cd react-webpack-boilerplate
- npm install

# Running
- npm run start
- Open browser and go to url http://localhost:8085/


# Features
- Bootstrap a React app with common features already built in
- Module bundling using Webpack
- Webpack Dev Server
- Linting for checking common syntax errors
- Husky hooks to make sure lint rules are run on the changed files before committing them

# Common Commands
- npm run start => start dev-server and run the app. Make changes in the code, save the file, and browser will update automatically
- npm run lint => runs lint checks and reports for any syntax errors in the code
- npm run lint:fix => runs lint checks, tries to fix some common errors automatically, and reports for any other syntax errors in the code
- npm run dev => creates a development build. Can debug the code in browser.
- npm run build => creates a production build. Minifies the files. Cannot debug in browser. Comment the 'devtool' line in webpack.config.js for production builds


# ToDo
- Test Cases