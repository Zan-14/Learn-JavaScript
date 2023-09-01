//CONDITIONAL STATEMENT

// const grade = prompt('masukan nilai')
// if (grade >= 90 && grade <= 100) {
//     document.write('A')
// } else if (grade >= 80 && grade < 89) {
//     document.write('B')
// } else if (grade >= 70 && grade < 79) {
//     alert('C')
// } else if (grade >= 60 && grade <= 69) {
//     alert('D')
// } else if (grade >= 0 && grade < 60) {
//     alert('E')
// } else {
//     alert('Nilai yang dimasukan tidak sesuai')
// }

// const score = prompt('masukan nilai')

// if (score == 100) alert('A');
// else if (score >= 89) alert('B');
// else if (score >= 79) alert('C');
// else if (score >= 69) alert('D');
// else alert('E')

// const grade = prompt('Masukan Nilai ?')
// if (grade >= 90 && grade <= 100) {
//     alert('A')
// } else if (grade > 79 && grade < 90) {
//     alert('B')
// } else if (grade > 69 && grade < 80) {
//     alert('C')
// } else if (grade > 59 && grade < 70) {
//     alert('D')
// } else if (grade >= 0 && grade < 60) {
//     alert('E')
// } else {
//     alert('Nilai yang dimasukan tidak sesuai')
// }
const user = {
    username: 'rizal',
    password: '123',
}

const dataLocation = 'Jakarta'

const usernameElm = document.getElementById('username')
const passwordElm = document.getElementById('password')
const locationElm = document.getElementById('location')
const btnLoginElm = document.getElementById('btn_login')

btnLoginElm.addEventListener('click', function () {
    const username = usernameElm.value
    const password = passwordElm.value
    const location = locationElm.value

    if (username !== "" && password !== "") {
        if ((username === user.username) && (password === user.password)) {
            console.log(location)
            if (location.toLowerCase() === dataLocation.toLowerCase()) {
                alert('Anda Orang Jakarta')
            } else {
                alert('Anda Bukan Orang Jakarta')
            }

            alert('Anda Berhasil Login')

        } else {
            alert('Username dan Password anda salah')
        }
    } else {
        alert('Username dan Password harus diisi dulu')
    }

})
//SWITCH CASE

const hari = ''
const hariCon = hari.toLowerCase()

switch (hariCon) {
    case 'Senin': //===
        alert('Sekarang Hari Senin waktu Upacara');
        break;
    case 'Selasa':
        alert('Sekarang Hari Selasa waktu Olahraga');
        break;
    default:
        alert('Sekarang Hari Libur');
        break;
}



//LOOPING


// for (let i = 0; i < 10; i++) {
//     document.write('Perulangan ' + i)
// }

const buah = ["apel", "pisang", "jeruk", "melon"]

// for (let a = 0; a < buah.length; a++) {
//     document.write('buah ' + buah[i])
// }


//foreach
const mobil = {
    merk: "Honda",
    warna: "Merah",
    seri: "Jazz"
}
mobil.roda = 4
mobil["roda"] = 4

console.log(mobil)

for (let key in mobil) {
    if (key == 'merk') {
        document.write(`${mobil[key]}`)

    }
}

const buahDuplicate = []

buah.forEach((item) => {
    buahDuplicate.push(item)
})

const buahDuplicate2 = buah.map((item) => {
    return item
})

console.log(buah, 'buah asli')
console.log(buahDuplicate, 'buah duplicate')
console.log(buahDuplicate2, 'buah duplicate2')



