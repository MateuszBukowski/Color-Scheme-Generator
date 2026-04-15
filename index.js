// Needed:
// - mode
// - count=5
// - rgb seed ? - color

const color = document.getElementById('color')
const mode = document.getElementById('mode')
const count = 5

fetch('https://www.thecolorapi.com/scheme?hex=FF0&mode=monochrome&count=5')
    .then(res => res.json())
    .then(data => getColorsHex(data.colors))


function getColorsHex(dataColors){
        for (let index = 0; index < dataColors.length; index++)
            console.log(dataColors[index].hex.value)
}

console.log(`color: ${color.value}`)
console.log(`mode: ${mode.value}`)
console.log(`count: ${count}`)

