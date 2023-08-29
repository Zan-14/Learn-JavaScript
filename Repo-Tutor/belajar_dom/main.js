const containerElement = document.getElementsByClassName('container') //get element by classname

const titleElement = document.getElementById('title') //get element by id

const menuElement = document.getElementsByTagName('li') // get element by tagname


const containerElementSel = document.querySelectorAll('.container')
const menuElementSel = document.querySelectorAll('li')

const titleElementSel = document.querySelector('#title')



function ubahTitle() {
    titleElementSel.innerHTML = "Menu Lengkap Restaurant Saya"

    console.log('ubah')
}

const btnElementUbah = document.getElementById('btn_ubah')

btnElementUbah.addEventListener('click', function () {
    ubahTitle()

})

const btnUbahBackground = document.getElementById('btn_ubah_background')
const subTitleElement = document.querySelector('.subtitle')
console.log(subTitleElement, 'halo')


let isColor = false;

btnUbahBackground.addEventListener('click', function () {

    if (isColor) {
        subTitleElement.style = "background-color:white;color:black"
    } else {
        subTitleElement.style = "background-color:red;color:blue"

    }

    isColor = !isColor
    // subTitleElement[0].style.backgroundColor = 'red'

})

function btnEdit() {
    const baksoElement = document.querySelectorAll('li')

    const valueElement = `${baksoElement[0].outerText} ${baksoElement[1].outerText} ${baksoElement[2].outerText}`

    console.log(valueElement)
    // const listElement = document.querySelectorAll('li')


    // console.log(listElement)

}

const liMenuElement = document.getElementsByClassName('menu')
const liMenuElementClass = document.querySelectorAll('.menu')
liMenuElementClass.classList.add('redColor')

for (let i = 0; i < liMenuElement.length; i++) {
    liMenuElement[i].style = 'color:red'
    console.log()
}







// btnElementUbah.addEventListener('click', () => { ubahTitle() })

