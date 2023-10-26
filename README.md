# React Native Stargazers Project 
Node version: 18.18.2  
npm version: 9.8.1

## Table of Contents

- [Overview](#overview)
- [Preliminary considerations](#requirements)
- [Libraries](#libraries)
- [How to install](#install)
- [Folders Structure](#folder)
- [Stargazers Project](#project)

# Overview
Stargazers project is a mobile application that allows you to get the list of users who have added a certain repository to their favourite.  
The application is realized using React Native with Typescript.

# Preliminary considerations
Based on the specifications provided to me and my personal experience, I will draft some User Stories that will usefull to make some technical considerations. User Story consists of a short description written from user's point of view, with natural language.  
US1. As a user I want to get repositories related to a certain username so I can choose one of the available repositories.  
US.2 As a user I want to see if there is some error so I can understand that something went wrong.  
US.3 As a user I want the list of stargazers so I can see the stargazers user.  
Thanks to user stories, it is possible to understand how to proceed at a technical level.  
If the system provides the user with a list of repositories for a specific username, it reduces the possibility of data entry errors. Similarly, the user wants to be informed if there is any error that hinders the search for stargazers.  
Once the list of stargazers is obtained, the user wants to make sure if the entered username really belongs to the intended user being searched. For this reason, an information summary of the searched username is necessary. The user may be interested in both viewing the stargazers in a detailed manner and obtaining a total number of stargazers.  
Finally, the user must be notified if there are no stargazers for that repository of the particular username.

# Libraries
The following libraries are used for this application:  
* [react-hook-form](https://react-hook-form.com/): Library used to manage form in React
* [yup](https://github.com/jquense/yup): Yup is a schema builder used to validate form
* [fontAwesome](https://fontawesome.com/icons): The most popular web icon library
* [react-navigation](https://reactnavigation.org/): Library used to allow navigation between screens inside the app
* [react-native-screens](https://github.com/software-mansion/react-native-screens): It is not designed to be used as a standalone library but is a dependency of react-navigation.
* [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context): It is a library for handling safe area insets in React Native applications. In this project it is used as a dependency of react-navigation.
* [react-native-select-dropdown](https://www.npmjs.com/package/react-native-select-dropdown): Search dropdown library
* [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated): It is an animated library API that support gesture based interaction
* [axios](https://axios-http.com/docs/intro): Axios is a promise-based HTTP Client for node.js and the browser. It is used to make HTTP request.
* [ESLint](https://eslint.org/): ESLint statically analyzes your code to quickly find problems.

# Install
To run the project, do the following steps:
1. Install node (version 18.18.2)
2. On your terminal run `git clone https://github.com/valekuro/stargazers.git`
3. In the project folder run `npm i`
4. Connect a phone or use an emulator
5. Finally run `npx react-native run-android` or `npx react-native run-ios` to run application on the device
6. If you want start tests, run `npm test`

# Folders
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
│   │   ├───Navigation
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
### Api
For this application [APIs Github](https://docs.github.com/en/rest/repos?apiVersion=2022-11-28) have been used. Here you can find functions for these APIs calls, in particular:
* getUserRepository [/users/{username}/repos](https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-the-authenticated-user): giving a username, it gets his repositories;
* getInformationsByUsername [/users/{username}](https://docs.github.com/en/rest/users/users?apiVersion=2022-11-28#get-a-user): get all informations about a specific user;
* getStargazers [/repos/{owner}/{repo}/stargazers](https://docs.github.com/en/rest/activity/starring?apiVersion=2022-11-28#list-stargazers): get the list of users who have added a specific repository to their favourite;
### Components
In this folder there are the main components of the application. These components will make up the screens.  
Each component folder contains at least two of these files:
* style.ts: StyleSheet component
* index.tsx: JSX component
* I[Component].ts: specific component types
* use[Component].ts: personalized hook that contains the component logic
* other components used only in the main component.  
</br></br>Each component is commented using jsdoc.

### Interfaces
The folder contains API interfaces and form interfaces called everywhere in the app.

### Screens
It contains the app screens. The folder use the same file logic see in Components folder. 
### Theme
The folder contains theme.ts file with colors and borderRadius used in the app. This folder could contains all styles in common between components.
### __tests__
Tests are written in Jest and React Native Testing Library.
### Types
The folder contains the common application types, in this case you can find navigation types.
### Utils
In this folder you can find generic functions. For this application, utils contains function to manage api error all over the app.
# Stargazers Project
## Search screen
The first screen shows an input text for the username and a select for choose a repository. The form is controlled by react-hook-form and validate with yup library so If you try to send data required empty, you can see an error message.
<p align='center'>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/select-block.jpeg?raw=true" width=200 />
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/hook-form-error.jpeg?raw=true" width=200>
</p>
As you can see in one of the images below, the errors from API are managed. I choose to use the default messages but you can choose text you want. Until username input is empty or you fill a username without repository, the select is inactive. If the username has repositories, the select becomes active. In dropdown you have an input to search a specific repository in list.
<p align='center'>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/api-error.jpeg?raw=true" width=200 />
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/select-unlock.jpeg?raw=true" width=200>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/search-open-select.jpeg?raw=true" width=200>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/form-compiled-happy-path.jpeg?raw=true" width=200>
</p>

## Result screen
To show stargazers list, I prefer to use a FlatList instead of Scrollview because FlatList is more efficient. Then I turned the list into a carousel applying style and animations with the library react-native-reanimated. 
Clicking on an avatar you can see informations such as photo, name and git url.
<p align='center'>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/result-screen.jpeg?raw=true" width=200>
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/no-stargazers-found.jpeg?raw=true" width=200 />
<img src="https://github.com/valekuro/stargazers/blob/main/app_screen/another-result.jpeg?raw=true" width=200>
</p>
