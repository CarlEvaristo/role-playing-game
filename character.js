import {getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"


function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceHtml = getDicePlaceholderHtml(this.diceCount)

    this.setDicePlaceholderHtml = () => {
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }

    this.setDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        data.currentDiceScore = this.currentDiceScore
        this.diceHtml = this.currentDiceScore.map(dice => `<div class="dice">${dice}</div>`).join("")
    }

    this.takeDamage = function(damage) {
        damage.map(dice => this.health-=dice)
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
        } 
    }

    this.getHealthBarHtml = () => {
        const percent = (getPercentage(this.health, this.maxHealth))
        return `
        <div class="health-bar-outer">
            <div class="progress-bar health-bar-inner ${(percent<25)? 'danger' : ''}" 
                style="width: ${percent}%;">
            </div>
        </div>`
    }

    this.getCharacterHtml = function() {
        const { charName, avatar, health, diceCount, currentDiceScore, diceHtml, setDiceHtml } = this;  
        const healthBar = this.getHealthBarHtml()
        return  `<div class="character-card ${(charName === 'Jedi')?'light_side':''}">
                    <h2 class="name"> ${charName} </h2>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceHtml}
                    </div>
                </div>`
    }

}

export default Character