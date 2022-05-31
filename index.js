import {characterData} from "./data.js"
import Character from "./character.js"


function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}


function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()
    if (orc.isDead || wizard.isDead ) {
        endGame()
    }
}

/*CHALLENGE
1. Create a second const in endGame called endEmoji.
2. Figure out how to set it to hold the emoji "🔮" if the 
wizard wins, and "☠️" if the orc wins. If both characters 
are dead use "☠️".
3. Finally, take the html template string below render it 
to the screen so it replaces everything else when the game 
is over.
`<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}/h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
*/

function endGame() {
    const endEmoji = (orc.isDead & !wizard.isDead) ? "🔮" : "☠️"

    const endMessage = (orc.isDead & !wizard.isDead) ? "The Wizard Wins"
        : (!orc.isDead & wizard.isDead) ? "The Orc is Victorious"
        : "No victors - all creatures are dead"

    document.getElementById("actions").innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
