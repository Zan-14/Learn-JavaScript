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
]

//1. Buatkan data diatas menjadi seperti ini ["Alice","Bob","Carol"]
const namaMahasiswa = dataMahasiswa.map((user) => user.nama)
// console.log(namaMahasiswa, 'halo')


//2. Buatkan array object yang hanya menampilkan nama dan usia saja [{nama:,usia},{}]

const namaMahasiswaUsia = dataMahasiswa.map((user) => {
    return {
        nama: user.nama,
        usia: user.usia
    }
})

// console.log(namaMahasiswaUsia)
//3. Tampilkan pada html dengan tampilan seperti ini
// 1. nama: Alice - 20
// 2. nama: Alice - 20
const elemenMahasiswa = document.getElementById('dataMahasiswa')
dataMahasiswa.map((item) => {
    elemenMahasiswa.innerHTML += `<li>${item.id}. nama : ${item.nama}</li>`
})


const dataMahasiswaBaru = [
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

//1. Buatkan data datas menjadi seperti ini [{nama:"Bob",kotaAsal:"Jogja","Kalimat":"Saya berasal dari malang"}]

const mhsKota = dataMahasiswaBaru.map((user) => {
    console.log(user, 'user')
    return {
        nama: user.nama,
        kotaAsal: user.alamat.kota,
        Kalimat: `Saya berasal dari ${user.alamat.kota}`
    }
})
console.log(mhsKota, 'baru')


const mhsInformatika = dataMahasiswaBaru.filter((user) => user.jurusan == "Informatika")

const elemenMahasiswaBaru = document.getElementById('dataMahasiswaBaru')

mhsInformatika.map((item) => {
    elemenMahasiswaBaru.innerHTML += `<li>${item.id}. nama :${item.nama} ${item.alamat.provinsi}</li>`
})

console.log(mhsInformatika)
//2. Tampilkan pada html mahasiswa yang jurusan informatika, dan munculkan nama dan provinsi



//1. balmon - jawa timur

//pertanyaan bonus
//3. Munculkan pada alert berapa rata rata nilaiAkhir dari data mahasiswa diatas
// innerHtml
const totalnilai = dataMahasiswaBaru.reduce((accumulator, user) => {
    return accumulator + user.nilaiAkhir
}, 0)

console.log(totalnilai / dataMahasiswaBaru.length, 'total')

let awal = "halo"
let akhir = awal + "akhir"


console.log(awal += "akhir")

