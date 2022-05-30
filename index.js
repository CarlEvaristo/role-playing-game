import {characterData} from "./data.js"
import Character from "./character.js"


function render(data) {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml();
    document.getElementById("monster").innerHTML = orc.getCharacterHtml();
}

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
document.getElementById("attack-button").addEventListener("click", () => render())
