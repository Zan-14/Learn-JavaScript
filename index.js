/* JS part 1-2 */

// external JavaScript
// adding script in the <head> and below the body/html will effect the order of appearing. Pay attention to it.
console.log('try console log');
// before adding more code, check the JS file whether it has been read or not by the browser 
// by using console.log(); (debug) or alert(); or prompt();

// const vs let vs var
// DON'T USE VAR

/* This is the way of making 
a multiline 
comment, not using // = 1 line comment only
*/

const myName = "fauzan";
// u can't redeclare const

let angka = 10;
// let can declare one value only

// How to name a variable / function:
// camelCase = thisIsCamelCase > function
// snake_case = this_is_snake_case > variable


// alert(`${myName} ${angka}`);
// the easy way to call a variable or compile some variables


// learn Document Object Model (DOM)!\

// DOM vs Virtual DOM
// DOM: One change to the document will reload all of the structure from zero 
// When using JQuery or Vanilla JS, DOM will be used (slower because reloading the browser)


// Virtual DOM: Apply the change without reloading all of the structure, just change the part necessary.
// When using a framework like React, usually using Virtual DOM (Faster, without reloading the page or browser)

// first, we can use this syntax to show the document structure in browser console:
console.log(document);

// // How to access DOM with getElement:
// getElementById()
// // source: attribute id in HTML
const ulElement = document.getElementById('ulList');
// don't misstype / typo, the browser will not read the syntax
console.log(ulElement);

// getElementsByName()
// // source: attribute name in HTML
const formTest = document.getElementsByName('form-test');
console.log(formTest);

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
// // function: choose element based on Id attribute
const callhead = document.querySelector(`#containerHead`);
// don't misstype / typo, the browser will not read the syntax
console.log(callhead);

// querySelector(`.myClass`) 
// // function: choose element based on class attribute

// querySelector(`p`) 
// // function: choose element based on tag, example: <p>

// querySelectorAll()
// // function: choose all elements that match with the given CSS
// this syntax is special when you need to call more than one (array)
// when you use querySelectorAll, all the class/tag/name that has the same naming will be appeared. except id, because you can use id on one element only (spesific) so you mustn't use querySelectorALL on Id
/*Look at this example, I want to call class = "list" */
const listClass = document.querySelector(`.list`);
console.log(listClass); //this syntax only called first
/*Now I will use querySelectorAll*/
const listClasses = document.querySelectorAll(`.list`);
console.log(listClasses); //this syntax calls all HTML with the same class name


/* Manipulate the text content of HTML */

// 1. first method (without any user interaction)
// first declare the variable and use DOM like above (call the chosen element), u can use getElement or querySelector (I will use querySelector here)
const helloGuys = document.querySelector(`.opening`);
helloGuys.innerHTML = "Hello Guys After Manipulation"; //syntax : variable.innerHTML = "new text";

// 2. Second method (example: through button)
// take a look at button, I've created button with onclick function in HTML. Then go here in JS file create a function with same name
// first, get the element that you want to manipulate
const h3Change = document.querySelector(`.note`);
// second, create a function with the same name as the onclick function in HTML element
function changeText(){
    h3Change.innerHTML = "You press the button huh?"
}; //place the innerHTML syntax inside the function syntax

// 3. Third method (example: through button)
// add Id attribute to the button
// I am using getElementById here. Remember that using getElement, type the id without # symbol.
const ulText = document.getElementById('ulList');
// declare / get the id that you want to manipulate first
console.log(ulText); //if you want to make sure that you have called chosen id, you can use console.log(variable)
const ulChangeButton = document.getElementById('changeUl'); // declare / get  the button id
ulChangeButton.addEventListener('click',function(){
    ulText.innerHTML = "Ul after click the second button";
}); 
/*syntax: *button-variable*.addEventListener('click',function(){
    *id-target.innerHTML = "new text";
})*/


// Manipulate the style/CSS content of HTML

// 1. manipulate 1 style
// get the button element first (I am using getElementById)
const btnBgChange = document.getElementById('change_bg'); //get the button id first
btnBgChange.addEventListener('click',function(){
    const bgChange = document.getElementsByTagName('body'); //get the element that you want to manipulate through button click)
    bgChange[0].style.backgroundColor = 'grey'; //use .style.backgroundColor to change the background color.
    console.log(bgChange); //use console.log to check the function, add the [0] to show the content of the element (first indext number). If you can see body tag contents in the console, then the function is correct.
});


// 2. manipulate more than 1 / many styles
/* get the button element first (I am using querySelector)
remember use # for id , . for class*/
const btnStyChange = document.querySelector('#change-styles'); //get the button id first
btnStyChange.addEventListener('click',function(){
    const paragChange = document.querySelector('.paragraph-lorem'); //get the element that you want to manipulate through button click)
    paragChange.style = "background-color:red;color:white;font-size:xx-large" //use .style = "CSS syntax and use ; to separate between style" to change the background color.
    console.log(paragChange); //use console.log to check the function, add the [0] to show the content of the element (first indext number). If you can see body tag contents in the console, then the function is correct.
});
    
// 3. Manipulate many styles on many elements with the same class. (using loop) 
//Function must be looped if you want to change styles to more than 1 element with the same class, watch video JS part 3 first question (around 10 minutes)
const btnLiChanges = document.querySelector('#change_many');
// declare or get the button id
btnLiChanges.addEventListener('click',function(){
    const LiStyChanges = document.querySelectorAll('.list');
    //declare / get the class name
    for (let i = 0; i < LiStyChanges.length; i++) {
        LiStyChanges[i].style = 'background-color:yellow;color:red;font-weight:bold;text-decoration:underline'
        console.log(LiStyChanges);
    }
});

/*4. Create a reversible button to manipulate styles and go back to default*/
// This process will need if statement
const h2Text= document.querySelector(`.opening`); //get the target element
const btnReversibleStyle = document.querySelector('#on-off-styles'); // get the button id
let styleManipulate = false; //create false variables with let not const 
btnReversibleStyle.addEventListener('click', function(){
    if(styleManipulate){
        h2Text.style = 'background-color:white;color:black' //this is the default style
    } else {
        h2Text.style = 'background-color:black;color:white;font-weight:bold;text-decoration:underline'; //this is the manipulation style
    }
    styleManipulate = !styleManipulate; //add the reverse off the value in the variables (reverse of variable styleManipulate which you can add !, !styleManipulate)
}) 


/*
Actually, innerHTML is one of the object value that we can manipulate inside the HTML element.
You can check other values by using console.log(variable) 
*/

// last video JS part 2 : 1:05:00
