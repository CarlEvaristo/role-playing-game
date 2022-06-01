import {characterData} from "./data.js"
import Character from "./character.js"

let monstersArray = ["stormtrooper", "bobafett", "darthvader"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return (nextMonsterData) ? new Character(nextMonsterData) : {} 
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()
    if (wizard.isDead & !monster.isDead) {
        endGame()
        console.log(11111)
    }
    if (monster.isDead & monstersArray.length != 0) {
        monster = getNewMonster()
        render()
    }
    if (monster.isDead & monstersArray.length == 0) {
        endGame()
    }
}

function endGame() {
    const endEmoji = (monster.isDead & !wizard.isDead) ? "babyyoda.gif" : (!monster.isDead & wizard.isDead) ? "dartvader.gif" : "novictors.gif"

    const endMessage = (monster.isDead & !wizard.isDead) ? "The Light Side Wins"
        : (!monster.isDead & wizard.isDead) ? "The Empire is Victorious"
        : "No victors - both sides lose"

    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <img class="end-emoji" src="images/${endEmoji}">  
        <button id="replay-button">New Game</button>
    </div>` 
    document.getElementById("replay-button").addEventListener("click", () => location.reload())

}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.jedi)
let monster = getNewMonster()

render()
