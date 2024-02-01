# React Portfolio Website

In this project I will create a Portfolio website using React.


## About Me 
Born and raised in Italy, I moved to the UK in 2015. I have always been interested in new technologies and IT, as I studied IT in my A levels back in Italy. After 5 years working in content management for a website, I decided to make the step of learning Front-End Development thanks to the edX course, and on my gitHub profile I showcase not only my progress in Front-End Development as a student but also a journey that hopefully will lead to new exciting projects in this field.

## Usage

To view the website you can click [HERE](https://nikola84ca.github.io/react-portfolio/), and if you want to download the whole project and run the app on your machine, simply follow the instructions in the Installation paragraph below, then lounch the prompt, go in the project directory where the React project file is, and write the command:

```bash
npm start
```
Make sure you have installed all the necessary node and react libraries. Once the app has been initialized it should open a new page in your browser and show the portfolio webpage. Here is an amination of the desktop view of the webpage:

![Gif animation of how to use the ReadMe File Generator app](/Images/TEAMhtml-Prompt.JPG)

## Installation

First, make sure that Git and Git Bash are installed on your system. For this project you will also need to install node and react libraries. To download this project on your machine click [HERE](https://github.com/Nikola84ca/react-portfolio) to go to the repository on GitHub. Click on the green CODE button, and copy the link of the repository. In your machine, open gitBash and create a new folder where you will clone the project using the command below:

```bash
Git mkdir your-project-folder
```
navigate inside the new folder, and clone the project files with the following comands

```bash
cd your-project-folder
Git clone url-copied-on-repository
git pull
```

Open your editor with the command

```bash
code .
```

alternatively download the zip file in GitHub after pressing the Code button, unzip it and copy it in your project folder. Navigate to the folder using the cd command on gitbash and lounch your editor as shown above with the "code . " command. To run the app you will need to input the following command in the terminal:

```bash
npm start
```

Make sure you have node and react installed in your machine first, you can find very useful information about this process [HERE](https://www.pragimtech.com/blog/reactjs/install-reactjs/)

## App Description 

The Team file generator app will run in the prompt of commands allowing users to quickly generate and complete their Team page simply launching the index.js file and following the shown instruction, writing the names and information for each team member etc information that will be then ordered and written into the generated team.html file. 

## My Process

* After creating the react project and pushing and reploying it to the relative repository on my gitHub profile, I started implementing the App. I got rid of all the files and directories I didn't need, like the react logos and test files, and started setting up the strucutre of my project. I decided to keep the App.js file, that will contain the main engine of the website and is the parent page that will then call all the other child pages ( About, Contact, Home, Projects ), the index.js file that will contain import and make the App run, and the index.css, that will contain the global CSS styling for the pages.

* Once I created the folder page and created the four pages I will need for the website, I made sure to import them in the App.js file, and implemented the router structure as follows:

```JavaScript
import React from "react";
import "./index.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
```

* Now that the structure of pages of the website is done I was able to start creating the first component, the header navbar. I decided to create a components folder and created the Navbar.jsx file and its relative styles file NavbarStyles.css that will be imported in it. The first thing I did after importing the css file and the relative react files such as Link, was to start implementing my nav bar. The first link was the logo/title of my webpage, that will redirect the user to the homepage.

```JavaScript
const Navbar = () => {
  return (
    <div className="header">
        {/* this is the logo of my webpage and will also link to the homepage */}
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
    </div>
  )
}
```


* Now, to make this primordial Navbar component visible on the pages, I need to import it in the relative pages, I started with the Home.js page, importing the Navbar component as shown in the code below:

```JavaScript
import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
    <div>
      <Navbar/>
    </div>
    </>
  )
}

export default Home
```

* To complete the structure of my navbar I added the other pages links as follows, and started styling them and creating the whole styles thanks to the specific classes assigned to the navbar tags.

```JavaScript
   <div className="header">
        {/* this is the logo of my webpage and will also link to the homepage */}
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
        {/* the following are the links of the navbar that will redirect to the specific pages of the site */}
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>

    </div>
```

* I started styling the navbar and some other global elements in the global index.css file. I firstly imported the google font I needed and made sure that all the text and link followed the following css code.

```JavaScript
/* This is the imported font from google fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Outfit', sans-serif;
}

/* This will set the color of the background of the website */
body{
  background: rgb(26, 26, 78);
}

/* I want the color of all text to be white, and for the link tags to have no underline */
h1, h4, p, a {
  color: white;
  text-decoration: none;
}

/* This will remove the dot from the list elements */

ul{
  list-style-type: none;
}

```


* At this point I started working on making the navigation bar responsive. I firstly imported the hamburger and x icons from the react icons library and created the div in the Navbar function:

```JavaScript
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import React, {useState} from 'react'
import {FaBars, FaTimes} from "react-icons/fa";


const Navbar = () => {

// the following function will make sure that the menu will disappear once a link is clicked

    const [click, setClick] = useState(false);
    const handleClick = () => setClick (!click);

  return (
    <div className="header">
        {/* this is the logo of my webpage and will also link to the homepage */}
        <Link to="/">
            <h1>My Portfolio</h1>
        </Link>
        {/* the following are the links of the navbar that will redirect to the specific pages of the site, also the if statement on the click will show what menu to show in the mobile view from the css settings */}
        <ul className={click ? ".nav-menu.active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {/* the following function calls the click function above, if click is true I will show the FaTimes icon (the x) cause the menu is open, otherwhise I will close the menu and show the hamburger function */}
            {click ? ( <FaTimes size={20} style={{color: "#fff"}}  /> ) : (
            <FaBars size={20} style={{color: "#fff"}}  /> )}

        </div>

    </div>
  )
}

export default Navbar
```


* 

```JavaScript

```


* 

```JavaScript

```


* 

```JavaScript

```


* 

```JavaScript

```




## Credits

I would like to thank all the teachers and TA of the EdX bootcamp for all the content provided and study materials. I found the information needed to create the React project and push/deploy it to git hub very helpful and detailed in this article on [www.github.com](https://github.com/gitname/react-gh-pages) website. I have found very useful information about how to install node and react on [www.pragimtech.com](https://www.pragimtech.com/blog/reactjs/install-reactjs/). 

## Project Status and Upcoming Improvements

The app is functional and easy to launch and use, and the website is easy to navigate and responsive. The theme is a bit dart and I plan a restyling soon to make it look fresher and more pleasent. 

## Collaborations and Contributions

I welcome all the brilliant coders out there to join me in this project. Join effort can result in a fundamental learning experience for a beginner coder like me, so feel free to reach out with tips and advice. If you want to contribute to this project, pull requests are welcome, but if you want to make major changes, please open an issue first so that we can discuss what you would like to change. You can contact me on my GitHub profile [HERE](https://github.com/Nikola84ca) and visit this project repository by clicking [HERE](https://github.com/Nikola84ca/react-portfolio).

[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


















# Extra information about this Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

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
