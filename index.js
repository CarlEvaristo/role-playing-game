import {characterData} from "./data.js"
import Character from "./character.js"


/*
Challenge
1. Make it so getNewMonster returns a new instance of Character. Think
what argument you should be passing. If there are no more monsters in the 
array, getNewMonster should return an empty object {}.
2. Down near the bottom of the file, set a new variable "monster" equal 
to our new function getNewMonster.
3. Delete any code we no longer need.
- The app will still be broken - don't worry for now!
**hint.md for help!!**
*/


let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return (nextMonsterData) ? new Character(nextMonsterData) : {} 
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = monster.getCharacterHtml();
}

/*
Challenge
1. Change the attack function so that when a monster dies, 
the next monster replaces it. If there are no more monsters,
call endGame(). 
2. Make sure that endGame() still gets called if the wizard
is killed.
*/


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
    const endEmoji = (monster.isDead & !wizard.isDead) ? "🔮" : "☠️"

    const endMessage = (monster.isDead & !wizard.isDead) ? "The Wizard Wins"
        : (!monster.isDead & wizard.isDead) ? "The monster is Victorious"
        : "No victors - all creatures are dead"

    document.body.innerHTML = `
    <div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}</h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()
