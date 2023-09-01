// JavaScript Part 5

// console.log('test');

// If, switch, functions, Basic OOP, Async Await (optional)

/* CONDITIONAL STATEMENTS 

if STATEMENTS

*/
//basic if statements syntax
const score = 10

if (score == 15) {
    console.log('wrong')
} else {
    console.log('right')
};

// ANOTHER EXAMPLE of if statement (nested if statements)
// const gradeRanges = prompt('Input your grade "A , B , C , D"').toLocaleUpperCase();

// if (gradeRanges == "A" || gradeRanges == "B") {
//     alert('Good Job!')
// } else if (gradeRanges == "C" || gradeRanges == "D") {
//     alert('Come on! Try harder next time')
// } else {
//     alert('Please type A or B or C or D only!')
// };
// Note: REMEMBER! toLocaleUpperCase() is a method, so you must type ().


/* learn || (or); && (and); != (not same) in conditional statements */

// QUESTION
/* 
score 90 - 100 = A
score 90 - 100 = B
score 70 - 79 = C
score 60 - 69 = D
score < 60 = E
*/

// const yourScore2 = prompt('Input score 0-100');

// if (yourScore2 >= 90 && yourScore2 <= 100) {
//     alert('A');
// } else if (yourScore2 >= 80 && yourScore2 <= 89) {
//     alert('B');
// } else if (yourScore2 >= 70 && yourScore2 <= 79) {
//     alert('C');
// } else if (yourScore2 >= 60 && yourScore2 <= 69) {
//     alert('C');
// } else if (yourScore2 >= 0 && yourScore2 < 60) {
//     alert('E');
// } else {
//     alert('Input number from 0 - 100')
// };


/* Study Case , create Login
conditions / scenarios:
1. The Username and Password must be same as the database (variable), True = alert('login success'), False = alert('incorrect username / password')
2. If the user input "jakarta" in the location, there will be an alert('You are from Jakarta'), else = alert('you are not from Jakarta') */

// This is the user account
const user = {
    username: 'uzan',
    password: '1401',
}
const dataLocation = 'jakarta';

//get the element from the html
const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const locationElm = document.getElementById('location');
const btn_loginElm = document.getElementById('btn_login');

//create an action when pressing the button "Login"
btn_loginElm.addEventListener('click', function () {
    // declare variable when user input the data account
    const username = usernameElm.value
    const password = passwordElm.value
    const location = locationElm.value

    // create the nested if conditions
    // first condition is the user must input the user and password. they can't left it blank
    if (username.length > 0 && password.length > 0) {

        //second condition is the user input and the database or their registered account data must be same
        if (username === user.username && password === user.password) {

            //third condition is if the user from jakarta or not. Blanking the location will be considered as false input, so this is optional. If you want to make user input the location and not blanking it, you can add location in the first if condition.
            if (location.toLowerCase() === dataLocation.toLowerCase()) {
                alert('You are from jakarta')

            } else {
                alert('You are not from jakarta')
            }

            //special to this alert, you can't place this under the second if. Pay attention to the brackets and position of the result.
            alert('Login successful')

        } else {
            alert('Invalid username or password')
        }
    } else {
        alert('Input your Username and Password')
    }
});




/* Switch Case */

//Example:
const day = 'friday';
const dayLowCase = day.toLowerCase();

switch (dayLowCase) {
    case 'Monday':
        console.log('You are right, today is friday', '"switch case practice"');
        break;
    case 'Tuesday':
        console.log('You are wrong, today is friday', '"switch case practice"');
        break;
    default:
        console.log('You are wrong!', '"switch case practice"');
        break;
};
/* USE switch case if:
1. We know the other conditions / options are
2. If we don't know that, prefer to use if else
*/



/* Looping in JavaScript */

/* Counted and Uncounted looping
1. Counted Looping = We know how many times are the loop
examples: for and foreach */
// for loop
const loopFor = document.getElementById('loop_for');
// console.log(loopFor);

const scoreGrade = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].toString();

for (let i = 0; i < 5; i++) {
    loopFor.innerHTML += `<p>${i + 1} - ${scoreGrade}</p><br>`;
};

// console.log(scoreGrade);

/* 2. Uncounted looping = We don't know how many times are the loop
examples: while and do/while */

