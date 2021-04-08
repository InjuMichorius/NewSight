# Exclusive Table Design
![](IMAGE)

Exclusive Table Design is a school project I made to make tables and graphs more accessible for the visually impaired. The project is focused on one user (exclusive design) called Roger Ravelli. He used to work as a renewable energy specialist, but he's slowly becoming blind and will need to use a screenreader.

[Click here for the live demo](https://injumichorius.github.io/exclusiveTableDesign)

## Goal
The goal of Exclusive Table Design is learn how to make the web a more accessible place. The result should be a working table/graph web application that's easily readable by a screenreader.

## Getting started [OUTDATED!]
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Technical requirements [OUTDATED!]
To run this project you'll need [Git](https://git-scm.com/downloads), [MongoDB](https://www.mongodb.com) and any [code editor](https://code.visualstudio.com/download)

### Installing [OUTDATED!]
First you'll need to clone the repository. You can choose a destination by running cd (change directory). You can clone this repository by using clone https://github.com/InjuMichorius/hva-enquete.git.

```js
cd [ENTER YOUR PATH HERE]
git clone https://github.com/InjuMichorius/hva-enquete.git
```
You also need to install the modules. To do this, you can type npm install in your terminal.

```js
npm install
```
### Setting up the database [OUTDATED!]
This is the structure of the database:
```JSON
{
  "_id":{"$oid":"606275a73d6d8a2440bab79b"},
  "uuid":"7c99e779-499b-420c-b38e-f83da0f02b66",
  "studentName":"Inju Michorius",
  "studentNumber":"500804843",
  "__v":0
}
```

It will look like this in compass:
![Screenshot of JSON file in Compass](https://github.com/InjuMichorius/browser-technologies-2021/blob/master/public/img/documentation/databaseStructure)

### Testing [OUTDATED!]
To test if the application works you can type the command below. If the application works, the terminal should say: Example app listening at: http://localhost:3000
```js
npm run dev
```
To test if you've correctly connected to the database you can go to the account page by typing http://localhost:3000 in your browser. Once on this page, you can fill in the form and send it. If it shows in the database, you've correctly connected. You can use Compass for easy visual acces to your database.

## Feature wishlist / backlog
* filler

## Design patterns and Best Practices
__Code standards are important__ when working on any project; your code stays *consistent* and is *readable* for everyone. I defined code standards for __HTML__, __CSS__ and __JS__ while working on this project.

### Javascript code standards
* Variables & functions are written in __camelCase__
* Promises are handled with __async functions__ using await
* I don't use var, only __const__ or __let__
* I put __spaces around operators__ ( = + - * / ) and after commas (exception for for loops)
* I use indentation with __TAB__
* I always end a statement with a __semi-colon;__
* Functions have their opening bracket on the __same line__ as the name, with 1 space in between
* I use __ES6 syntax__ where possible

### CSS code standards
* I try to avoid __!important__ as much as possible
* Layout/general styling is always __above__ more specific styling
* Selectors are not unnecessary __long__ nor __short__
* I use __CSS3 syntax__ where possible
* I avoid old display properties like float
* CSS Selectors must have a __space__ between the name and bracket

### HTML code standards
* I only use IDs when the element is present __once__ on a page and it's necessary for styling or Javascript
* I always write semantic HTML according to __W3C Validator__
* Divs are only used when __necessary__ for styling purposes
* Classes allow easy __re-usage__
* Indentation is always __clear__

## Packages used [OUTDATED!]
* [Express](https://www.npmjs.com/package/express) - Used to setup the server
* [MongoDB](https://www.npmjs.com/package/mongodb) - Used to setup the database
* [Body-parser](https://www.npmjs.com/package/body-parser) - Used to refer to html elements
* [Dotenv](https://www.npmjs.com/package/dotenv) - Used to protect sensitive information
* [Ejs](https://www.npmjs.com/package/ejs) - Used for templating
* [Nodemon](https://www.npmjs.com/package/nodemon) - Used for auto refreshing the server

## License
This project is licensed under the MIT license. See the [LISENCE.md](https://github.com/InjuMichorius/Filmaholic/blob/master/LICENSE) file for details
