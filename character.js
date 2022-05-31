import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

/*CHALLENGE
1. Create a new method inside Character called "takeDamage".
2. For now, have the method log out the name of the damaged character
and phrase "is damaged".
3. In index.js, find the attack() function and call takeDamage
for each character inside that function. 
*/

function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        data.currentDiceScore = this.currentDiceScore
        this.diceArray = this.currentDiceScore.map((dice)=>`<div class="dice">${dice}</div>`).join("")
    }

    this.isDead = false
    this.takeDamage = function(damage) {
        damage.map((dice)=> this.health-=dice)
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
        }
    }

    this.getCharacterHtml = function() {
        const { charName, avatar, health, diceCount, currentDiceScore, diceArray, getDiceHtml } = this;  

        return  `<div class="character-card">
                    <h4 class="name"> ${charName} </h4>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    <div class="dice-container">
                        ${diceArray}
                    </div>
                </div>`
    }

}

export default Character