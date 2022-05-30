import {getDiceRollArray} from "/utils.js"


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

export default Character