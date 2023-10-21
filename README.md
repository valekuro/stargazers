# React Native Stargazers Project 
Node version: 18.18.2
npm version: 9.8.1

## Table of Contents

- [Overview](#overview)
- [Libraries](#libraries)
- [How to install](#install)
- [Folder Structure](#folder)
- [Stargazers Project](#project)
- [Technical Choise](#technical-choise)

##overview
The project is a React Native application that through the Github API allows you to view the list of stargazers in a repository. After insert an existing username and a repository, the app will give you information about the list of users who have added the repository to their favourite.

##libraries
[react-hook-form](https://react-hook-form.com/): Library used to manage form in React
[yup](https://github.com/jquense/yup): Yup is a schema builder used to validate form
[fontAwesome](https://fontawesome.com/icons): The most popular web icon library
[react-navigation](https://reactnavigation.org/): Library used to allow navigation between screen inside the app
[react-native-screens](https://github.com/software-mansion/react-native-screens): It is not designed to be used as a standalone library but is a dependency of react-navigation.
[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context): It is a library for handling safe area insets in React Native applications. In this project it is used as a dependency of react-navigation.
[react-native-select-dropdown](https://www.npmjs.com/package/react-native-select-dropdown): This library is usefull to create a search dropdown
[react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated): It is an animated library API that support gesture based interaction
[axios](https://axios-http.com/docs/intro): Axios is a promise-based HTTP Client for node.js and the browser. It is used to make HTTP request.
[ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.

#install
To run the project you have to do the followin steps:
1. Install node (version 18.18.2)
2. On your terminal run `git clone https://github.com/valekuro/stargazers.git`
3. When repository is available on your device, in the project folder run `npm i`
4. Finally run `npx react-native run-android`