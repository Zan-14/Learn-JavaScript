// Math and String Manipulation
let nilai = -200;
let absNilai = Math.abs(nilai);

let pangkat = Math.pow(2, 2);
let kuadrat = Math.sqrt(80);

let maxAngka = Math.max(100, 1, 2, 3, 4, 5);
let minAngka = Math.min(100, 1, 2, 3, 4, 5);

let pembulatanKebawah = Math.floor(9.9);
let pembulatanKeatas = Math.ceil(9.1);
let pembulatanPendekatan = Math.round(9.5);

let randomAngka = Math.random();
let randomAngkaTwenty  = Math.floor(Math.random() * 4)  + 20;

console.log(randomAngkaTwenty);

console.log(Math.floor(Math.random() * 100));

document.write(nilai);
console.log(absNilai);

const arrayScore = [100, 1, 3, 4, 5, 6];
const getMaxScore = Math.max(...arrayScore);
console.log(getMaxScore);

// const mathjs = Math. // explore the others Math.list


// String Manipulation
const nama = "Fauzan" // index> F = 0; a = 1; u = 2; z = 3; a = 4; n = 5;
console.log(nama.length);
console.log(nama[2],'memunculkan huruf tertentu dengan no index');

// String Methods
const name = "Uzan";
const city = "Blora";
const age = 20;
const sex = "male";

const mergeString = name + " " + city;
console.log(mergeString);

const merge = `${name} in ${city}`;
console.log(merge);

const repeatName = name.repeat(10);
console.log(repeatName);

const replaceCity = city.replace("Blora", "Jateng");
console.log(replaceCity);
// replaceAll > if you want to replace all.

console.log(city.indexOf("l"));
console.log(name[name.length - 1]);
console.log(city[city.length - 1]);

console.log(city.indexOf("z"));

const isExist = city.indexOf("z") == -1? "Tidak ada huruf" : "Ada huruf";
console.log(isExist);

// slice
console.log(city.slice(0,3));
console.log(city.slice(3,5));
// substring
console.log(city.substring(3,5));


// lowercase uppercase
const cityBig = city.toUpperCase();
const citySmall = city.toLowerCase();
console.log(cityBig, citySmall);

// trim
// to erase useless space

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

const formatIndo = now.toLocaleDateString("id-ID", options);
console.log(formatIndo); //kenapa error???

// const formatTimeIndo = now.toLocaleString('id-ID', options);
// console.log(formatTimeIndo);


const baru = new Date (1999, 2, 1)
console.log(baru);