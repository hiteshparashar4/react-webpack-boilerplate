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
- Bootstrap a React app with common features already built in
- Module bundling using Webpack
- Webpack Dev Server
- SCSS support
- Extracks css/scss code into a saperate file
- Linting for checking common syntax errors in the code to ensure code quality
- Husky hooks to run lint rules on the changed files before committing them. Makes sure no one in your team leaves the lint issues unresolved

# Common Commands
- npm run start => start dev-server and run the app. Make changes in the code, save the file, and browser will update automatically
- npm run lint => runs lint checks and reports for any syntax errors in the code
- npm run lint:fix => runs lint checks, tries to fix some common errors automatically, and reports for any other syntax errors in the code
- npm run dev => creates a development build. Can debug the code in browser. Uncomment the 'devtool' line in webpack.config.js for debugging source code
- npm run build => creates a production build. Minifies the files. Cannot debug in browser
