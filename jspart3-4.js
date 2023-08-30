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
const noTrimCity = "   Blora Indah Indonesia          "
console.log(noTrimCity, 'before trim');
console.log(noTrimCity.length, 'length before trim'); // before trim
const trimCity = noTrimCity.trim();
console.log(trimCity); // after trim
console.log(trimCity.length, 'length after trim'); // after trim


//split = to make array of strings
const fruit = "banana,apple,orange,melon"; //this is a string
const arrayFruit = fruit.split(','); // this will create a new array with ',' as separator
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
// If we have a lot of users, we don't type all of them. We use OOP instead. Check the OOP meaning in the next session

// JSON file is also in the form of object data
// JSON (JavaScript Object Notation) 

console.log(userIdentity1);
console.log(userIdentity2);
console.log(userIdentity1.usia); //first method to call a data from object
console.log(userIdentity2.username);
console.log(userIdentity1["motto hidup"]); //second method to call a data from object (use this if the key name is more than 1 word)
console.log(userIdentity2["username"]);

console.log(userIdentity2["nama lengkap"].firstName); // calling a data inside an object, inside an object

//Array 
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

//Object inside array
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
console.log(userList[1].username); //return = Hikam


// map() = to call certain data and create a new data
const changeUsia = userList.map((item) => {
    return {
        age: item.usia
    }
})
console.log(changeUsia, 'only Usia will appear and create a new array');

const showAsal = userList.map((free) => {
    return {
        kota: free.asal,
    }
});
console.log(showAsal, 'only show asal data with a change on the word asal to kota');


// You have completed the JavaScript part 3 (session 16)


/*
PART 4 
*/


// Date and Time



const bulan = ["Januari", "Februari", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const now = new Date(); // how to declare the date

/* Index of month and day
Januari = 0 
Sunday = 0 (the day start from Sunday)
Midnight = 0, so range of hour is 0-23
*/
console.log(now); // how to show current date inside console
console.log(now.getSeconds(), 'current seconds');
console.log(now.getMinutes(), 'current minutes');
console.log(now.getHours(), 'current hour');
console.log(now.getMonth() + 1, 'current month'); // how to show current month (in number)
console.log(now.getDay() + 1, 'current day');
const nowYearOnly = new Date();
console.log(nowYearOnly.getFullYear(), 'current year');

//Change the date format
// 1. Set to local format
let formatIndo = now.toLocaleDateString('id-ID');
console.log(formatIndo, '"format local (Indonesia)"'); // show local time

// 2. change month format to letter
let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
let formatIndoLong = now.toLocaleDateString('id-ID', options);
console.log(formatIndoLong, '"Month to letter format"');

// 3. add hour.minutes.seconds
let formatIndoFull = now.toLocaleTimeString('id-ID', options);
console.log(formatIndoFull, '"full Indo format"');

/* How to show current time in HTML real time */
let realTime = document.getElementById('current-time');
// declare and get the HTML element's id
setInterval(() => {
    let showTime = new Date();
    realTime.innerHTML = showTime.toLocaleTimeString('id-ID', options);
}, 1000);


// ASSIGNMENT (minitugas.js)
// First Data
const dataMahasiswa = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika"
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro"
    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis"
    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika"
    }
];
console.log(dataMahasiswa);

//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol", "Balmon"]

// first method
const nameOnly = dataMahasiswa.map((user) => user.nama);
console.log(nameOnly, 'first method');

// second method
const nameOnly2 = dataMahasiswa.map((user) => {
    return user.nama
});
console.log(nameOnly2, 'second method');


//2. Buatkan array object yang hanya menampilkan nama dan usia saja [{nama:,usia},{....}]
const ArrNameAge = dataMahasiswa.map((nameAge) => {
    return {
        nama: nameAge.nama,
        usia: nameAge.usia,
    }
})
console.log(ArrNameAge);


/* 3. Tampilkan pada html dengan tampilan seperti ini
1. nama: Alice - 20
2. nama: Alice - 20
*/
const showDataNameAge = document.getElementById('show-object-data');
dataMahasiswa.map((data) => {
    showDataNameAge.innerHTML += `<li>${data.id}. nama:${data.nama} - ${data.usia}</li>`;
});


// Second Data
const dataMahasiswaLengkap = [
    {
        id: 1,
        nama: "Alice",
        usia: 20,
        jurusan: "Informatika",
        alamat: {
            kota: "Jakarta",
            provinsi: "DKI Jakrta"
        },
        nilaiAkhir: 85,
    },
    {
        id: 2,
        nama: "Bob",
        usia: 22,
        jurusan: "Teknik Elektro",
        alamat: {
            kota: "Jogja",
            provinsi: "DI Yogyakarta"
        },
        nilaiAkhir: 90,

    },
    {
        id: 3,
        nama: "Carol",
        usia: 21,
        jurusan: "Desain Grafis",
        alamat: {
            kota: "Semarang",
            provinsi: "Jawa Tengah"
        },
        nilaiAkhir: 70,

    },
    {
        id: 4,
        nama: "Balmon",
        usia: 21,
        jurusan: "Informatika",
        alamat: {
            kota: "Malang",
            provinsi: "Jawa Timur"
        },
        nilaiAkhir: 60,

    }
]
console.log(dataMahasiswaLengkap);

//1. Buatkan data datas menjadi seperti ini [{nama:"Bob",kotaAsal:"Jogja","Kalimat":"Saya berasal dari malang"}]
const mhsNamaKotaSapaan = dataMahasiswaLengkap.map((data) => {
    return {
        nama: data.nama,
        'kota asal': data.alamat.kota,
        'sapaan': `Saya berasal dari ${data.alamat.kota}`,
    }
});
console.log(mhsNamaKotaSapaan);

/*2. Tampilkan pada html mahasiswa yang jurusan informatika, dan munculkan nama dan provinsi.
Example:
1. Balmon - Jawa Timur
*/


/* 3. Munculkan pada alert berapa rata rata nilaiAkhir dari data mahasiswa diatas
*/