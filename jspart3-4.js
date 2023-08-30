// JS part 3-4
// Math and String Manipulation
let score = -200;
let absScore = Math.abs(score);
console.log(absScore);

let powerScore = Math.pow(2, 2);
let rootScore = Math.sqrt(36); // square root of the value
console.log(rootScore);

let maxNumber = Math.max(100, 1, 2, 3, 4, 5);
let minNumber = Math.min(100, 1, 2, 3, 4, 5);

let roundingDown = Math.floor(9.7);
let roundingUp = Math.ceil(9.2);
let autoRounding = Math.round(9.5);

let randomNumber = Math.random();
/* Keep in mind that Math.random() generates a random number beetween 0 and 1, so 0 and 1 are not included.

The syntax below is to generate random numbers from 20 to under 25 without any decimal point or only integer numbers */
let randomTwenties  = Math.floor(Math.random() * 5)  + 20;

console.log(randomTwenties);

console.log(Math.floor(Math.random() * 100)); // this will generate a random number from 0 to under 100 in integer.


const arrayScore = [100, 1, 3, 4, 5, 6];
const getMaxScore = Math.max(...arrayScore); 
/*You must add 3 dots (...constant) in the method, because the data is array. If you just type the constant, you will get NaN (Not a Number) return.
*/
console.log(getMaxScore);

// const mathjs = Math. // explore the others Math.list


// String Manipulation
const nama = "Fauzan" // index> F = 0; a = 1; u = 2; z = 3; a = 4; n = 5;
console.log(nama.length);

console.log(nama[2], 'Showing a specific letter with the index number');

console.log(nama.indexOf('z'), 'using indexOf to know the index number of a specific letter');

// String Methods
const myName = "Uzan";
const city = "Blora";
const age = 20;
const sex = "male";

const mergeString = myName + " " + city;
console.log(mergeString);

const merge = `${myName} in ${city}`; 
// recommended method to merge string data
console.log(merge);

const repeatName = (myName + ' ').repeat(10);
console.log(repeatName);
document.write(repeatName);

const replaceCity = city.replace("Blora", "Jateng");
console.log(replaceCity);
// replaceAll > if you want to replace all.

console.log(city.indexOf("o"));
console.log(myName[myName.length - 1]); // to know the last letter of the data;
console.log(city[city.length - 1]);

console.log(city.indexOf("z")); // the result will be -1 because there is no z letter in the city name

const isExist = city.indexOf("z") == -1 ? "Tidak ada huruf" : "Ada huruf";
//the syntax above is to know whether there is a certain letter (true) or not (false) and give a comment based on the true or false
console.log(isExist);

// slice
console.log(city.slice(0,3), "'letter with 0, 1, 2 index will appear'");
console.log(city.slice(1,4), "'letter with 1, 2, 3 index will appear'");
// substring
console.log(city.substring(1,4)); //same with slice


// lowercase uppercase
const cityBig = city.toUpperCase();
const citySmall = city.toLowerCase();
console.log(cityBig, citySmall);


// trim (to erase useless space)



//split = to make array of strings
const fruit = "banana,apple,orange,melon";
const arrayFruit = fruit.split(',');
console.log(arrayFruit);

// Object >> {}
const userIdentity1 = {
    username: "Uzan",
    usia: 23,
    asal: "Blora",
    "motto hidup": "aku bisa"
}
const userIdentity2 = {
    username: "Marsha",
    "nama lengkap": {
        firstName: "Uzan",
        lastName: "Marsha",
    },
    usia: 25,
    asal: "Semarang"
}
console.log(userIdentity1);
console.log(userIdentity2);
console.log(userIdentity1.usia);
console.log(userIdentity2.username);
console.log(userIdentity2["username"]);
console.log(userIdentity1["motto hidup"]);

console.log(userIdentity2["nama lengkap"].firstName);

//Array 
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

const userList = [
    {
        username: "Adi",
        usia: 30,
        asal: "Jogja",
    },
    {
        username: "Hikam",
        usia: 20,
        asal: "Bandung",
    },
    {
        username: "Isyan",
        usia: 25,
        asal: "Sragen",
    },
];
console.log(userList);
console.log(userList[1].username);

const changeUsia = userList.map((item) => {
    return {
        age: item.usia
    }
})
console.log(changeUsia);

// https://github.com/prasetya12/batch_8


//JS Part 4


// Date and Time
// Januari = 0 not 1
// Januari = 0 not 1


const bulan = ["Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const now = new Date();
console.log(now);
console.log(now.getMonth() + 1);
console.log(now.getDay());

// const formatIndo = now.toLocaleDateString("id-ID", options);
// console.log(formatIndo); //kenapa error???

// const formatTimeIndo = now.toLocaleString('id-ID', options);
// console.log(formatTimeIndo);


const baru = new Date (1999, 2, 1)
console.log(baru);