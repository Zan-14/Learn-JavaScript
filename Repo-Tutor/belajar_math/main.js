let nilai = -200
let absNilai = Math.abs(nilai) //absolute mengembalikan nilai positif

let pangkat = Math.pow(2, 2)
let kuadrat = Math.sqrt(80)

let maxAngka = Math.max(100, 1, 2, 3, 4, 5)
let minAngka = Math.min(100, 1, 2, 3, 4, 5)

let pembulatahKebawah = Math.floor(9.9)
let pembulatahKeatas = Math.ceil(9.1)
let pembulatahPendekatan = Math.round(9.5)

let randomAngka = Math.random()
// console.log(randomAngka)

let randomAngkaTwenty = Math.floor(Math.random() * 4) + 20

// console.log(randomAngkaTwenty)

document.write(nilai)
// console.log(absNilai)

const arrayScore = [1, 3, 4, 5, 6, 99, 100.5,]
const getMaxScore = Math.max(...arrayScore)
// console.log(getMaxScore)

const nama = "Rizal P "
const kota = "Saya berasal dari Bandung"
const umur = 16

const mergeString = nama + " " + kota
const merge = `${nama} ${kota}`

const repeatKota = kota.repeat(10)


const replaceKota = kota.replace('Bandung', 'Jakarta')
const replaceKotaAll = kota.replaceAll('a', 'o')

let kotaBaru = " Bandung "
// console.log(kotaBaru[kotaBaru.length - 1])

const isExist = kotaBaru.indexOf("b") == -1 ? "Tidak Ada Kata" : "Ada Kata"
// console.log(isExist, 'halo')

// console.log(kotaBaru.slice(3, 7))
// console.log(kotaBaru.substring(3, 7))

const upperKota = kotaBaru.toUpperCase()
const lowerKota = kotaBaru.toLowerCase()

// console.log(kotaBaru.length, 'sebelum trim')

const trimKota = kotaBaru.trim()
// console.log(trimKota.length, 'sesudah trim')


const namaBuah = "banana apple watermelon"
const arrayBuah = namaBuah.split(' ')
// console.log(arrayBuah)

const username = "Rizal"
const usia = 16
const asal = "Jogja"

const user = {
    username: "Rizal",
    usia: 16,
    asal: "Jogja",
    "nama lengkap": {
        firstName: "Rizal",
        lastName: "Prasetya"
    },
    score: [{
        math: 90
    },
    {
        indo: 100
    }]
}
const buah = ["apel", "pisang", "anggur"]

const userList = [
    {
        username: "Rizal",
        usia: 16,
        asal: "Jogja",
    },
    {
        username: "Prasetya",
        usia: 20,
        asal: "Semarang",
    },
    {
        username: "Prasetya",
        usia: 20,
        asal: "Semarang",
    }
]

console.log(userList)


const userAsal = userList.map((item) => {
    return {
        location: item.asal
    }
})

console.log(userAsal)

// console.log(user.asal)
// console.log(user['nama lengkap'])


// document.write(repeatKota)
const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep"]


const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
}
const now = new Date()
const formatIndo = now.toLocaleDateString('id-ID', options)
const formatDatetimeIndo = now.toLocaleString('id-ID', options)

console.log(formatDatetimeIndo)

function tahunKabisat(year) {
    return year % 4 === 0 ? 366 : 365
}

const expiredDate = 30

const baru = new Date(1999, 2, 1)
console.log(baru)




