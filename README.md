# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install`
Run this comand in project directory to install all dependencies
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



# Project file/folder structure
Inside src folder all the magic happens
```bash
├── public
│   |── # Scaffolded files with npx create-react-app assessment, one change in index.html file to add fonts

└── src
     ├── assets
        ├──images/ #images inside
        ├──styles/ # css and scss file
     ├── components
        ├── Button.js #Reusable button component,take multiple props and display based on that, even styles are passed as props, we can have different background color based on props/styles 
        ├── EventCard #Currently just and static component with svg image(more scalable and responsive, don't loose quality on scale) we can make this card resusable/dynamic for diffent event card data;
        ├── HeadingComponent.js #Top heading compoent/ text content, can be made fully reusable
     ├── Pages #dedicated folder to compose pages using all small components(composition add super power with react)
        ├── HomePage.js # root location on browser localhost:3000, one page
   ├── App.css # most of the code inside this file is useless. just once used to make elements centered aligned( text-align: center)
   ├── App.js # This is the root of  app.
   ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
   ├── index.css # Global styles.
   └── index.js #  It is used for DOM rendering only.
├── package.json # npm package manager file, records of npm packages. 
├── README.md - This file.




```
