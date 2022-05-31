function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(()=>Math.floor(Math.random()*6)+1)
}

function getDicePlaceholderHtml(diceCount) {
    return new Array(diceCount).fill("").map(()=>`<div class="dice placeholder-dice"></div>`).join("")
}

let getPercentage = (remainingHealth, maximumHealth) => (100*remainingHealth)/maximumHealth


export {getDiceRollArray, getDicePlaceholderHtml, getPercentage}

