<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Yoruba_ALoud_Feb_Cohort" />

&#xa0;

  <!-- <a href="https://yoruba_aloud_feb_cohort.netlify.app">Demo</a> -->
</div>

<h1 align="center">Yoruba Learning App</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8">

  <img alt="Github issues" src="https://img.shields.io/github/issues/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" />

  <img alt="Github forks" src="https://img.shields.io/github/forks/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" />

  <img alt="Github stars" src="https://img.shields.io/github/stars/Juadebfm/yoruba_aloud_feb_cohort?color=56BEB8" />
</p>

Status

<h4 align="center">
	🚧  Yoruba Learning App 🚀 Under construction...  🚧
</h4>

<hr>

<p align="center">
<a href="#dart-about">About</a> &#xa0; | &#xa0; 
<a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
<a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
<a href="#rocket-api-documentation">API Documentation</a> &#xa0; | &#xa0;
<a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
<a href="#white_check_mark-sections">Sections</a> &#xa0; | &#xa0;
<a href="#memo-license">License</a> &#xa0; | &#xa0;
<a href="https://github.com/Juadebfm" target="_blank">Author</a>

</p>

<br>

## :dart: About

The Yoruba Learning App Dashboard is a central hub within the larger Yoruba Learning App, designed specifically for administrators and instructors. It provides an intuitive and efficient interface for managing user accounts, tracking learner progress, creating and organizing lessons and exercises, and accessing valuable analytics. The dashboard empowers administrators and instructors to effectively monitor and enhance the learning experience, enabling them to make data-driven decisions and ensure the successful implementation of the Yoruba Learning App's comprehensive language learning program.

## :sparkles: Features

:heavy_check_mark: Fetch API\
:heavy_check_mark: REST API\
:heavy_check_mark: SweetAlert;

## :rocket: Technologies

The following tools were used in this project:

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [SASS](https://sass-lang.com/)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [SweetAlert](https://sweetalert2.github.io/#download)
- [Icons](https://boxicons.com/)
- [Font 1](https://fonts.google.com/specimen/Short+Stack)
- [Font 2](https://coolors.co/fonts)

## :white_check_mark: API Documentation

[YA DOCUMENTATION](https://documenter.getpostman.com/view/16238882/UVsTq2vm#6a750ec7-7063-4a41-8ae5-4c8603b14105)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

Knowledge of :checkered_flag:

- JS Functions
- Event Listeners
- Conditional Statements
- Event Handlers

## :white_check_mark: Sections

### Sign Up Section

Below are the steps needed to actualize the JavaScript Code for the Sign Up section of this project.

- STEP 1 - Get the signup btn using _getElementByID_
- STEP 2 - Set the innerText of the button to _"Sign Up"_
- STEP 3 - Add a _"click"_ eventListener to the button with a callback function that has _event_ as itʻs parameter.
- STEP 4 - prevent the default behaviors of form buttons using _.preventDefault()_ function.
- STEP 5 - Get the inputs using _getElementByID_ and we actually want to get the actually value of all 4 inputs in the signup page, donʻt forget that.
- STEP 6 - At this point, set the _innerText_ value of the _signUpBtn_ to _"Loading..."_
- STEP 7 - Then add the class _"pulse"_ to the _signUpBtn_ using the _classList_ method
- STEP 8 - Write a _if statement_ that checks if the value of the 4 inputs are not empty strings using logical _OR_ operator, e.g _if(getName === "" || getEmail === "" ...)_
- STEP 9 - In the _if Statement_ block throw a sweetalert that tells the users _"All fields are required"_
- STEP 10 - Still in the _if statement_ set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 11 - Write an _else if_ that checks if the confirm password is equal to password, if it is _NOT_ throw a sweetalert that says _password does not match_
- STEP 12 - Still in the _else if_ set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 13 - Now when done with all the checks above create a variable called _signUpData_ and assign a form data object instance to it e.g _new FormData()_
- STEP 14 - Now using the _append()_ method, append the inputs tp the _signUpData_ e.g _signUpData.append("name", getName);_
- STEP 15 - Create an object with name _signReq_ and add a property _method_ with value _"POST"_ and a property _body_ with value _signUpData_
- STEP 16 - Now create a variable _url_ and assign the [Signup Api](https://pluralcodesandbox.com/yorubalearning/api/register_admin) to it.
- STEP 17 - Now using the fetch API, do the following:
- STEP 17a - Add the _url_ and _signReq_ to the _fetch()_
- STEP 17b - The first _.then()_ function should receive a _response_ and should convert it to _json()_ e.g _(response) => response.json()_
- STEP 17c - The second _.then()_ should get the _result_ and in there we should have an _if Statement_ that checks if the result status is _"success"_, if it is, throw a sweetalert that says _"success"_ showing the _result message_, then set a timeout of _5000_ seconds that sends the users to _location.href="index.html"_ i.e to the login page, else if all this is falsey, throw a sweet alert that shows _"Registration Unsuccessful!"_, after this set the _innerText_ of the _signUpBtn_ to _"sign up"_ and remove the _"pulse"_ class from the button.
- STEP 18 - get and send the error and itʻs message in the _.catch()_ method e.g _(error) => console.log("error", error)_

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](./LICENSE) file.

Made with :heart: by <a href="https://github.com/Juadebfm" target="_blank">Juadeb Gabriel</a>

&#xa0;

<a href="#top">Back to top</a>
