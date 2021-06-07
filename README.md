# BookWorm

### Table of Contents
- [BookWork](#bookworm)
    - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Learning Goals](#learning-goals)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Project Reflection](#project-reflection)
        - [Wins](#wins)
        - [Challenges](#challenges)
        - [Overall Impressions](#overall-impressions)
        - [Future Features](#future-features)
  - [Credits](#credits)
      - [Authors](#authors)
      - [Project Managers](#project-managers)
        - [2021/05/25](#20210525)

## Overview
For this project, we chose a brand new technology to self-teach and incorporate into our code.  Our group utilized TypeScript to design BookWorm, an application designed for book lovers to view the New York Times Bestsellers and pick their next book to read! Book lovers are able to search by genre and add and remove books from a list of their favorites!  

![Screen Shot 2021-06-06 at 6 32 36 PM](https://user-images.githubusercontent.com/27929330/120942237-942a0100-c6f5-11eb-9cff-eeab6dd6241b.png)

- Deployed [LINK](https://bookworm-2102.herokuapp.com/)
- Project Spec [LINK](https://frontend.turing.edu/projects/module-3/stretch.html)

## Learning Goals
- Self-teach a brand new technology utilizing resources and problem-solving skills
- Familiarize ourselves with TypeScript and implement into project code
- Enhance our understanding of React, React Router, and Cypress

## Features
- When the application is launched, a user will see a list of book types they can chose from, and a navigation bar with a home and favorite button. The user can click on home to come back to this page at any time, and if the user clicks on favorites they will see a message indicating they haven't favorted any books yet. On the home page, a user can select a type of books and will be brought to the bookshelf page where they can favorite or unfavorite books. Once books have been favorited, user can navigate to the favorites page to see a list of all their favorite books where they can remove some if they chose.

## Technologies Used
* ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

* ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Setup Instructions
#### For viewing the application:
1. In your terminal, run `git clone https://github.com/jon-schlandt/book-worm.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `npm i` to install dependencies
5. Run `npm start` to start the web server
6. If a browser window does not automatically open, open your web browser and navigate to `http://localhost:3000` to access the application

#### For testing the application:
1. In your terminal, run `git clone https://github.com/jon-schlandt/book-worm.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `npm i` to install dependencies
5. Run `npx cypress open` to open the Cypress testing GUI
6. Click on an integration test and allow the test to run

## Project Reflection and Individual Learning Goals
##### Sarah  
- This project helped reassure me that I am capable of learning a new technology in a short amount of time with efficiency.  In a work environment, I will be able to use my problem-solving skills to conquer challenges.  TypeScript proved to be a very useful technology, and I'm so glad we chose to explore it now and overcome the learning curve that comes with it!  My goals, in addition to learning TypeScript, were to improve my CSS skills and create dynamic and DRY code.  I feel I achieved those goals!

##### Andrew

##### Jon
- Learning TypeScript and successfully building a React application using it was by far my biggest goal. Secondarily, I'd hoped to gain a better understanding of how I learn when looking into a new technology without the structure of guided lectures. Although TypeScript is essentially JavaScript with an extra bit of syntax, implementing it correctly can be a tedious task. Getting through the challenges of TypeScript and building an application that uses it efficiently and accurately (with no shortcuts) is a huge accomplishment.

## Future Iterations
After reaching the minimum viable product we established for this project, we attempted to extend the capabilities of BookWorm by adding a feature for displaying additional details for a given book. A 'Details' button was added to each book and once clicked a separate page with more information about the associated book would render. Although we made a lot of progress on this feature, we feel what we currently have is not complete enough for production - the work we did can be found on this [branch](https://github.com/jon-schlandt/book-worm/tree/feature/details). 

We hope to continue work on this feature and possibly add more features, like a search bar for category filtering, to provide a more enjoyable and efficient user experience.

## Credits
#### Authors
<table>
  <tr>
    <td></td>
    <td> Jon Schlandt <a href="https://github.com/jon-schlandt">GH</td>
    <td> Sarah Lane <a hef="https://github.com/sarahlane8">GH</td>
  </tr>
  <td>
  </td>  
  <td>
    <img src="https://avatars.githubusercontent.com/u/75702270?v=4" alt="Jon's' GH img"
  width="150" height="auto" />
  </td>
  <td>
  <img width="150" height="auto" src="https://user-images.githubusercontent.com/70901622/120944450-cafe1800-c6f1-11eb-96f2-5e18fdb2a96e.png" alt="Sarah's GH img">
  </td>
</table>

#### Project Managers
<table>
  <tr>
    <td> Leta Keane <a href="https://github.com/letakeane">GH</td>
    <td> Scott Ertmer <a href="https://github.com/sertmer">GH</td>
  </tr>
  <td>
    <img src="https://avatars.githubusercontent.com/u/22563791?v=4" alt="Leta's GH img"
 width="150" height="auto" />
 </td>
  <td>
    <img src="https://avatars.githubusercontent.com/u/49926352?v=4" alt="Scott's GH img"
 width="150" height="auto" />
 </td>
</table>

**************************************************************************
This project was created for [Turing School of Software and Design](https://turing.io/)
##### 2021/06/07
**[Back to top](#table-of-contents)**
