import {getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"


function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = () => {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        data.currentDiceScore = this.currentDiceScore
        this.diceArray = this.currentDiceScore.map(dice => `<div class="dice">${dice}</div>`).join("")
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
        const { charName, avatar, health, diceCount, currentDiceScore, diceArray, getDiceHtml } = this;  
        const healthBar = this.getHealthBarHtml()
        return  `<div class="character-card">
                    <h4 class="name"> ${charName} </h4>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    ${healthBar}
                    <div class="dice-container">
                        ${diceArray}
                    </div>
                </div>`
    }

}

export default Character