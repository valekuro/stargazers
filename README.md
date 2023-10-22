# React Native Stargazers Project 
Node version: 18.18.2
npm version: 9.8.1

## Table of Contents

- [Overview](#overview)
- [Libraries](#libraries)
- [How to install](#install)
- [Folder Structure](#folder)
- [Stargazers Project](#project)

# Overview
The project is a React Native application (using Typescript) that through the Github API allows you to view the list of stargazers in a repository. After insert an existing username and a repository, the app will give you information about the list of users who have added the repository to their favourite.

# Libraries
* [react-hook-form](https://react-hook-form.com/): Library used to manage form in React
* [yup](https://github.com/jquense/yup): Yup is a schema builder used to validate form
* [fontAwesome](https://fontawesome.com/icons): The most popular web icon library
* [react-navigation](https://reactnavigation.org/): Library used to allow navigation between screen inside the app
* [react-native-screens](https://github.com/software-mansion/react-native-screens): It is not designed to be used as a standalone library but is a dependency of react-navigation.
* [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context): It is a library for handling safe area insets in React Native applications. In this project it is used as a dependency of react-navigation.
* [react-native-select-dropdown](https://www.npmjs.com/package/react-native-select-dropdown): This library is usefull to create a search dropdown
* [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated): It is an animated library API that support gesture based interaction
* [axios](https://axios-http.com/docs/intro): Axios is a promise-based HTTP Client for node.js and the browser. It is used to make HTTP request.
* [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.

# Install
To run the project, do the following steps:
1. Install node (version 18.18.2)
2. On your terminal run `git clone https://github.com/valekuro/stargazers.git`
3. In the project folder run `npm i`
4. Finally run `npx react-native run-android` and enjoy!

# Folder
In this section there is the folder structure:

```bash
├───src
│   ├───api
│   ├───components
│   │   ├───Avatar
│   │   ├───Button
│   │   ├───CircularCarousel
│   │   ├───EmptySection
│   │   ├───ErrorMessage
│   │   └───Stars
│   ├───interfaces
│   ├───screens
│   │   ├───ResultScreen
│   │   └───SearchScreen
│   ├───theme
│   ├───types
│   └───utils
└───__tests__
```
## src folder
### Api folder
In this folder there are functions for GitHub API calls, in particular:
* getUserRepository: get all repository of a user;
* getInformationsByUsername: get all informations about a specific user;
* getStargazers: get the list of users who have added a specific repository to their favourite;

### Components folder
In this folder there are the main application components to guarantee the reusing code. Each folder component could contain:
* style.ts: file with the necessary StyleSheet
* index.tsx: it contains the jsx component
* I[Component].ts: it contains all the specific component types
* use[Component].ts: it is a personalized hook that contains the component logic
* other components used only in the main component: for example CircularCarousel component contains other secondary component used only for the component purpose.

### Interfaces folder
The folder contains API types and form types. I choose to get different folder because this types are called everywhere in the app.

### Screens folder
It contains the app screens. The folder use the same logic see in Components folder. 

# Stargazers Project



Technical choise
For result screen I prefer to use a FlatList instead of ScrollVIew to provide a better performed list. Then, I animate the list using react-native-reanimated library.