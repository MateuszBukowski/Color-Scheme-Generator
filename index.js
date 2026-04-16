// Needed:
// - mode
// - count=5
// - rgb seed ? - color
// Example:
// "/scheme?hex=FF0&mode=monochrome&count=5"

const color = document.getElementById('color')
const mode = document.getElementById('mode')
const count = "5"

let colorRequets = color.value.slice(1)

let apiRequest = `https://www.thecolorapi.com/scheme?hex=${colorRequets}&mode=${mode.value}&count=${count}`
console.log(apiRequest)

fetch(apiRequest)
    .then(res => res.json())
    .then(data => getColorsHex(data.colors))

function getColorsHex(dataColors){
        for (let index = 0; index < dataColors.length; index++)
            console.log(dataColors[index].hex.value)
}

console.log(`color: ${colorRequets}`)
console.log(`mode: ${mode.value}`)
console.log(`count: ${count}`)

