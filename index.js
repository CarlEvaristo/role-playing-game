import {characterData} from "./data.js"
import {getDiceRollArray} from "./utils.js"


function Character(data) {
    Object.assign(this, data)
    const { elementId, name, avatar, health, diceCount} = this;

    this.getDiceHtml = () => getDiceRollArray(diceCount).map(dice => `<div class="dice">${dice}</div>`).join("")
    
    
    this.getCharacterHtml = function() {
        return  `<div class="character-card">
                    <h4 class="name"> ${name} </h4>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    <div class="dice-container">
                        ${this.getDiceHtml()}
                    </div>
                </div>`
    }
}

function render(data) {
    document.getElementById(wizard.elementId).innerHTML = wizard.getCharacterHtml();
    document.getElementById(orc.elementId).innerHTML = orc.getCharacterHtml();
}

/*Does something here need to change?*/
const {hero,monster} = characterData
const wizard = new Character(hero)
const orc = new Character(monster)
render()
document.getElementById("attack-button").addEventListener("click", () => render())
