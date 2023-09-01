//DO WHILE

// let ulangi = confirm("Apakah anda mau mengulang?")
// let counter = 0

// while (ulangi) {
//     var jawab = confirm("Apakah anda mau mengulang?")
//     counter++
//     if (jawab == false) {
//         break;
//     }
// }

// document.write("Perulangan sebanyak " + counter)


//FUNCTION

// function sum(param1, param2) {
//     console.log(param1 + param2)
//     return param1 + param2
// }

// btnLoginElm.addEventListener('click', function () {
//     const hasil = sum(2, 9)
//     console.log(hasil, '2')

//     return hasil
// })

// const sum = (param1, param2) => {
//     console.log()
// }


//OBJECT ORIENTED PROGRAMMING
// function Mobil(merk, name, tahun) {
//     this.merk = merk
//     this.name = name
//     this.tahun = tahun

// }
// const honda = new Mobil("honda", "jazz", 2002)
// const hyundai = new Mobil("hyundai", "creta", 2020)
// console.log(hyundai.merk)


class Mobil {
    constructor(merk, name, tahun) {
        this.merk = merk
        this.name = name
        this.tahun = tahun
    }

    jalan() {
        console.log(this.merk + " jalan")
    }
}

const honda = new Mobil("honda", "jazz", 2002)
const hyundai = new Mobil("hyundai", "creta", 2020)
hyundai.jalan()

// const honda = {
//     merk: 'honda',
//     name: 'jazz',
//     tahun: 2002
// }


// const hyundai = {
//     merk: 'hyundai',
//     name_mobile: 'creta',
//     tahun: 2020
// }

// const toyota = {
//     merek: 'hyundai',
//     name_mobile: 'creta',
//     tahun: 2020
// }


