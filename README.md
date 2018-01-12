# README #

To start the server run:
1) npm install
2) npm start

Also required nodejs and npm installed

Deploy your code in the 'client' directory. Make sure it exists in the root directory
You will be able to open files in browser by the link http://localhost:3000/name-of-your-file.ext

Taks:
Create a form with add, edit and delete functionality. Our site will have header, footer and main content. Main content will consist of a list of added items in the left and CRUD form in the right. We will split the task in a few parts

Task for the iteration 1:
a) Create header and footer(you can use bootstrap's header and footer, but they should be always sticked to the top and bottom of the screen).
b) Create a form for adding a part. Consist of the following fields:
- part name
- country. Get a list from http://localhost:3000/api/countries GET). You can serach in this list typing in the input field. Only matches will be shown. List is scrollable and you can use arrows for navigation and enter for selecting a country.
- a few checkboxes
- a few radio buttons
- submit button

Saving form avvailible at http://localhost:3000/api/form POST. Make sure files folder exists in the root folder

Create 'develop' branch for work
Browser support ie 11+