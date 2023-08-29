let name = "Rizal"  //string
let umur = 20       //number
let isAdmin = false //boolean , nilai nya hanya true dan false
let Mobil = {
    merk: 'Honda',
    warna: "merah",
    tahun: 2000,
    isPajak: false
}


// let listMobil = ["Rizal", "Prasetya"]
let listMobil = [{
    merk: 'Honda',
    warna: "merah",
    tahun: 2000,
    isPajak: false,
    jalan: [["Jalan Soekarno"]]
}, {
    merk: 'Toyota',
    warna: "putih",
    tahun: 2001,
    isPajak: false
}]


const conListMobile = listMobil.map((mobil) => mobil.tahun)

console.log(listMobil[0].jalan[0])


const x = 10;
const y = 3;
const z = "3"

const tambahResult = x + y
const penguranganResult = x - y
const perkalianResult = x * y
const bagiResult = x / y
const module = x % y
const pangkat = x ** y

let samaDengan = x == y
let samaDenganTiga = x === y
let lebihBesar = x > y
let lebihKecil = x > y
let lebihBesarSamaDengan = x > y
let lebihKecilSamaDengan = x < y


const nightMode = true
// condition ? true : false
const greeting = nightMode ? "Selamat Malam" : "Selamat Siang"

const nilai1 = 10
const nilai2 = "10"
const phi = "3.1426178629127"


const bulatKebawa = Math.floor(phi)
const bulatKeatas = Math.ceil(phi)
const bulat = Math.round(phi)




const hasil = nilai1 + parseInt(nilai2)
const parsePhi = parseFloat(phi)
console.log(parsePhi.toFixed(3))
const isNight = false

console.log(Number(isNight))






let tidaksamaDengan = x != y


