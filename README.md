# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Purpose
This Portfolio app is designed to showcase my projects and skills in visually appealing and interactive manner. It is built using React.js and Tailwind CSS, and it integrates with YouTube API Email.js API and Pexel API for additional functionalities. The project is licensed under the MIT license.

# Contributing 
This project is developed using Visual Studio Code for coding and version-controlled using Git, hosted on GitHub. GitHub profile link distributed in footer section of the web app.

If you'd like to contribute, please follow these steps: 

Fork the repository
Create your feature branch (git checkout -b feature/YourFeature)
Commit your changes (git commit -am 'Add some feature')
Push to the branch (git push origin feature/YourFeature)
Open a pull request

# Features 
One-page app with 4 views: Home, About, Resume, Portfolio
Responsive design for optimal viewing on all devices
Header and footer with responsive navbar
Dark and light mode toggle
Search functionality for projects
Integration with YouTube API for fetching videos
Integration with Pexel API for fetching images
Integration with Email.js API for contact form submission
Error handlers,Loading state, Not Found Page
Search result page, Project Detail page
Back to Home, Back to projects button
Scroll to top button
Scroll to contact section button

# Dependencies ->

## React.js

To install all required dependencies for the project
`run npm install` 
for more instructions : (https://react.dev/learn/installation)
/scripts created by react-create-app cmd is at the bottom of the README file/

## React Router DOM
The react-router-dom package contains bindings for using React Router in web applications.
`npm install react-router-dom`
for more instructions: (https://www.npmjs.com/package/react-router-dom)

## Tailwind CSS
`npm install -D tailwindcss`
for more instructions: (https://tailwindcss.com/docs/installation)

## youtube-api:
A package for interacting with the YouTube API.

Log in to Google Developers Console.
Create a new project.
On the new project dashboard, click Explore & Enable APIs.
In the library, navigate to YouTube Data API v3 under YouTube APIs.
Enable the API.
Create a credential.
A screen will appear with the API key.

for more information: (https://developers.google.com/youtube/v3/getting-started)

## pexel-api: 
The Pexels API enables programmatic access to the full Pexels content library, including photos, videos. All content is available free of charge.

(https://www.pexels.com/api)

## emailjs-com: 
A client library for sending emails using the Email.js API.

`npm install --save @emailjs/browser`
for more instructions: (https://www.emailjs.com/docs/sdk/installation/)


# Application Architecture
This application follows a component-based architecture typical of React.js applications. Here's a brief overview of the main components:

App: The main component that handles routing and renders other components based on the current route.
Header: Contains the navigation bar and toggles for dark/light mode.
Footer: Contains social media links.
Home: The landing page with a brief introduction and a form for users to get in touch with me.
About: A section detailing my background, skills.
Resume: A section detailing work history, skills, education and certifications.
Projects: Displays a list of my projects with the option to search.
Project Detail: Opens a single project page with more detailed information.
Search: Returns search result projects.

# Reporting Issues
If you encounter any issues while using the application, please feel free to report them on the GitHub repository's issue tracker. Be sure to include detailed steps to reproduce the issue and any relevant information about your environment.

# License
This project is licensed under the MIT License. See the LICENSE file for details.



## Available Scripts
In the project directory, you can run:
### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**
If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.
You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Code Splitting
This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size
This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment
This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify
This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
