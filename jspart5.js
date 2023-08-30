// JavaScript Part 5
console.log('test');

// If, switch, functions, Basic OOP, Async Await (optional)

/* CONDITIONAL STATEMENTS 

If statements

*/
const score = 10

if (score == 10) {
    console.log('sama');
}else {
    console.log('tidak sama');
};

// const yourScore = prompt('input your score').toLowerCase;

// if (yourScore == 'a' || yourScore == 'b') {
//     alert('Your score is good');
// }else if (yourScore == 'c' || yourScore == 'd') {
//     alert('Your score is not good enough');
// } else {
//     alert('type A or B or C or D');addEventListener
// };

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


/* Study Case Login (fail to follow real time, check the video part JS part 5*/ 
// const user = {
//     username: 'uzan',
//     password: '1401',
// }
// const dataLocation = 'Jakarta';

// const usernameElm = document.getElementById('username');
// const passwordElm = document.getElementById('password');
// const locationElm = document.getElementById('location');
// const btn_loginElm = document.getElementById('btn_login');

// btn_loginElm.addEventListener('click', function () {
//     const username = usernameElm.value;
//     const password = passwordElm.value;
//     const location = locationElm.value;
//     console.log(location)

//     if (username.length > 0 && password.length > 0) {

//         if (username === user.username && password === user.password) {
//             if(location.toLowerCase() === dataLocation.toLowerCase()) {
//                 alert('You are from Jakarta')

//             } else {
//                 alert('You are not from Jakarta')
//             }
            
//                 alert('Login successful')
            
//         } else {
//             alert('Input Username and Password')


/* Switch Case */

const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('You are right, today is monday', '"switch case practice"');
        break;
    case 'Tuesday':
        console.log('You are wrong, today is monday', '"switch case practice"');
        break;
    default:
        console.log('You are wrong!', '"switch case practice"');
        break;
};




/* Looping in JavaScript */

/* Counted and Uncounted looping
1. Counted Looping = We know how many times are the loop

example: for and  
*/

/* 2. Uncounted looping = We don't know how many times are the loop

example: 
*/

// I am exhausted, rewatch the video session 18 (JS part 5)