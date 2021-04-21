# ReadEar
![](IMAGE)

ReadEar is a school project I made, allowing blind people to "read" again. The project is focused on one user (exclusive design) called Roger Ravelli. He used to work as a renewable energy specialist, but he's slowly becoming blind and will need to use a screenreader. He likes to read and he's currently a member of a book group.

[Click here for the live demo](readearr.herokuapp.com/)

## Goal
The goal of ReadEar is to provide it's users with an accessible interface, so they can easily listen to mp3 files. By creating this project im hoping to learn how to make the web a more accessible place!

## Getting started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Technical requirements
To run this project you'll need [Git](https://git-scm.com/downloads), [Nodejs](https://nodejs.org/en/download/) and any [code editor](https://code.visualstudio.com/download)

### Installing
First you'll need to clone the repository. You can choose a destination by running cd (change directory). You can clone this repository by using clone https://github.com/InjuMichorius/ReadEar.git.

```js
cd [ENTER YOUR PATH HERE]
git clone https://github.com/InjuMichorius/ReadEar.git
```
You also need to install the modules. To do this, you can type npm install in your terminal.

```js
npm install
```

### Testing
To test if the application works you can type the command below. If the application works, the terminal should say: Example app listening at: http://localhost:3000
```js
npm run dev
```

## Feature wishlist / backlog
Below is a list of features I'd love to add to this application. The features are split up using the **M**o**SC**o**W** method.

**M** - Must haves
_These features are requirements for the end product_
- [x] Overview page with avaible books
- [ ] Possibilty to change pages

**S** - Should haves
_These features are wanted, but not necessary for a usable product_
- [ ] Accessible styling
- [ ] Easy audio controls

**C** - Could haves
_These features can be added if there is enough time to do so_
- [ ] Database that stores all mp3 files

**W** - Would haves
_These features can be added in the future_
- [ ] Easy way for firends to upload mp3 files

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
* [Body-parser](https://www.npmjs.com/package/body-parser) - Used to refer to html elements
* [Ejs](https://www.npmjs.com/package/ejs) - Used for templating
* [Nodemon](https://www.npmjs.com/package/nodemon) - Used for auto refreshing the server

## License
This project is licensed under the MIT license. See the [LISENCE.md](https://github.com/InjuMichorius/ReadEar/blob/master/LICENSE) file for details
