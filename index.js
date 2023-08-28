// external JavaScript
// adding script in the <head> and below the body/html will effect the order of appearing. Pay attention to it.
console.log('try console log');
// before adding more code, check the JS file whether it has been read or not by the browser 
// by using console.log(); (debug) or alert(); or prompt();

// const vs let vs var
// DON'T USE VAR

const name = "fauzan";
// u can't redeclare const

let angka = 10;
// let can declare one value only

// How to name a variable / function:
// camelCase = thisIsCamelCase > function
// snake_case = this_is_snake_case > variable


alert(`${name} ${angka}`);
// the easy way to call a variable or compile some variables


// learn Document Object Model (DOM)!\

// first, we can use this syntax to show the document structure in browser console:
console.log(document);

// // How to access DOM with getElement:
// getElementById()
// // source: attribute id in HTML
const ulElement = document.getElementById('ulList');
// don't misstype / typo, the browser will not read the syntax
console.log(ulElement); // still null on the browser!!

// getElementByName()
// // source: attribute name in HTML

// getElementsByClassName()
// // source: attribute class in HTML
const containerElement = document.getElementsByClassName(`container`);
// don't misstype / typo, the browser will not read the syntax
console.log(containerElement);

// getElementsByTagName()
// // source: tag in HTML, example: <div>
const liElement = document.getElementsByTagName(`li`);
// don't misstype / typo, the browser will not read the syntax
console.log(liElement);



// // How to access DOM with querySelector :
// // id, class, tag : you can call them one by one
// querySelector(`#myId`)
const callhead = document.querySelector(`#containerHead`);
// don't misstype / typo, the browser will not read the syntax
console.log(callhead);

// // function: choose element based on Id attribute
// querySelector(`.myClass`) 
// // function: choose element based on class attribute
// querySelector(`p`) 
// // function: choose element based on tag, example: <p>

// // this syntax is special when you need to call more than one (array)
// when you use querySelectorAll, all the class/tag/name that has the same naming will be appeared. except id, because you can use id on one element only (spesific) so you mustn't use querySelectorALL on Id
// querySelectorAll()
// // function: choose all elements that match with the given CSS
const someElements = document.querySelectorAll(`.container`);
// don't misstype / typo, the browser will not read the syntax
console.log(someElements);

// Manipulate the text content of HTML

// 1. first method
// first declare the variable and use DOM like above, u can use getElement or querySelector (I will use querySelector here)
const helloGuys = document.querySelector(`.opening`);
helloGuys.innerHTML = "Hello Guys After Manipulation";

// 2. Second method
// take a look at button, I've created button with onclick function in HTML. Then go here in JS file create a function with same name
const h2Change = document.querySelector(`.note`);
function changeText(){
    h2Change.innerHTML = "You press the button huh?"
};

// 3. Third method
// add Id attribute to the button
// I am using getElementById here. Remember that using getElement, type the id without # symbol.
const ulText = document.getElementById('ulList');
console.log(ulText); // declare the ul id first
const ulChangeButton = document.getElementById('changeUl'); // declare the button id
ulChangeButton.addEventListener('click',function(){
    ulText.innerHTML = "Ul after click the second button";
});


// Manipulate the style/CSS content of HTML

// 1. manipulate 1 style
// get the button element first (I am using getElementById)
const btnBgChange = document.getElementById('change_bg');
btnBgChange.addEventListener('click',function(){
    const bgChange = document.getElementsByTagName('body'); //get the element that you want to manipulate through button click)
    bgChange[0].style.backgroundColor = 'grey'; //use .style.backgroundColor to change the background color

    console.log(bgChange[0]); //use console.log to check the function, add the [0] to show the content of the element
})

// 2. manipulate more than 1 / many styles
// get the button element first (I am using getElementById)
const btnStyleChange = document.getElementById('change_styles');
btnStyleChange.addEventListener('click',function(){
    const styleChange = document.getElementsByClassName('list'); //get the element that you want to manipulate through button click)
    styleChange.style = "background-color:blue;color:white;text-decoration:underline" //this is the syntax for the style change more than 1 / many styles

    console.log(styleChange); //use console.log to check the function,
});

// Must be looped if you want to change styles to more than 1 element with the same class, watch video JS part 3 first question (around 10 minutes)

// DOM vs Virtual DOM
// DOM: One change to the document will reload all of the structure from zero 
// When using JQuery or Vanilla JS, DOM will be used (slower because reloading the browser)

// Virtual DOM: Apply the change without reloading all of the structure, just change the part necessary.
// When using a framework like React, usually using Virtual DOM (Faster, without reloading the page or browser)

// last video JS part 2 : 1:05:00