// Needed:
// - mode
// - count=5
// - rgb seed ? - color
// Example:
// "/scheme?hex=FF0&mode=monochrome&count=5"

const colorInpt = document.getElementById('color-inpt')
const mode = document.getElementById('mode')
const count = "5"
const colorsContainer = document.getElementById('colors-container')
const colorsNamesContainer = document.getElementById('colors-names-container')

let colorRequets = colorInpt.value.slice(1)
let apiRequest = `https://www.thecolorapi.com/scheme?hex=${colorRequets}&mode=${mode.value}&count=${count}`
let colorsArray = []

document.addEventListener('submit', function(e){
    e.preventDefault()
    queryApi()
    console.log(`Color: ${colorInpt.value}; Mode: ${mode.value}`)
})

function queryApi() {
    colorsArray = []
    colorRequets = colorInpt.value.slice(1)
    apiRequest = `https://www.thecolorapi.com/scheme?hex=${colorRequets}&mode=${mode.value}&count=${count}`
    console.log("Sending query ...")
    console.log(`color=${colorRequets}, mode=${mode.value}, count=${count}`)
    fetch(apiRequest)
    .then(res => res.json())
    .then(data => {
        dataColorsToArray(data.colors)
        colorsContainer.innerHTML =  getColorsContanierHtml()
        colorsNamesContainer.innerHTML = getColorsNamesHtml()
    })
}

function dataColorsToArray(dataColors){
    for (let index = 0; index < dataColors.length; index++){
        colorsArray.push(dataColors[index].hex.value)
    }
}

function getColorsContanierHtml(){
    htmlResult = ""
    colorsArray.forEach(colorElement => {
        htmlResult += `
            <div class="color-div" style="background-color:${colorElement}"> ${colorElement}  </div>
        `
    })
    return htmlResult
}

function getColorsNamesHtml(){
    htmlResult = ""
    colorsArray.forEach(colorElement => {
        htmlResult += `
            <div class="color-name"> ${colorElement} </div>
        `
    })
    return htmlResult
}


queryApi()
