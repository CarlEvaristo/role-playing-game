import {getDiceRollArray, getDicePlaceholderHtml, getPercentage } from "./utils.js"

class Character {
    constructor(data) {
        Object.assign(this, data)
        this.maxHealth = this.health
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
        this.percent = getPercentage(this.health, this.maxHealth)
    }

    setDicePlaceholderHtml() {
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)
    }

    setDiceHtml() {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceHtml = this.currentDiceScore.map(dice => `<div class="dice">${dice}</div>`).join("")
    }

    takeDamage(damage) {
        damage.map(dice => this.health-=dice)
        if (this.health <= 0) {
            this.health = 0
            this.isDead = true
        } 
    }

    getHealthBarHtml() {
        this.oldPercent = this.percent
        this.percent = getPercentage(this.health, this.maxHealth)
        console.log(`name: ${this.charName} || Percent: ${this.percent} || oldPercent: ${this.oldPercent}`);
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${(this.percent<25)? 'danger' : ''}" 
                style="width: ${this.percent}%; --from-width:${this.oldPercent}%; --to-width:${this.percent}%; animation:progress-bar 1s;">
            </div>
        </div>`
    }

    getCharacterHtml() {
        const { charName, avatar, health, diceCount, currentDiceScore, diceHtml, setDiceHtml } = this;  
        return  `<div class="character-card ${(charName === 'Jedi')?'light_side':''}">
                    <h2 class="name"> ${charName} </h2>
                    <img class="avatar" src="${avatar}" />
                    <div class="health">health: <b> ${health} </b></div>
                    ${this.getHealthBarHtml()}
                    <div class="dice-container">
                        ${diceHtml}
                    </div>
                </div>`
    }

}



// OLD CONSTRUCTOR FUNCTION
// 
// function Character(data) {
//     Object.assign(this, data)
//     this.maxHealth = this.health

//     this.diceHtml = getDicePlaceholderHtml(this.diceCount)

//     this.setDicePlaceholderHtml = () => {
//         this.diceHtml = getDicePlaceholderHtml(this.diceCount)
//     }

//     this.setDiceHtml = () => {
//         this.currentDiceScore = getDiceRollArray(this.diceCount);
//         data.currentDiceScore = this.currentDiceScore
//         this.diceHtml = this.currentDiceScore.map(dice => `<div class="dice">${dice}</div>`).join("")
//     }

//     this.takeDamage = function(damage) {
//         damage.map(dice => this.health-=dice)
//         if (this.health <= 0) {
//             this.health = 0
//             this.isDead = true
//         } 
//     }

//     this.percent = getPercentage(this.health, this.maxHealth)


//     this.getHealthBarHtml = () => {
//         this.oldPercent = this.percent
//         this.percent = getPercentage(this.health, this.maxHealth)
//         console.log(`name: ${this.charName} || Percent: ${this.percent} || oldPercent: ${this.oldPercent}`);
//         return `
//         <div class="health-bar-outer">
//             <div class="health-bar-inner ${(this.percent<25)? 'danger' : ''}" 
//                 style="width: ${this.percent}%; --from-width:${this.oldPercent}%; --to-width:${this.percent}%; animation:progress-bar 1s;">
//             </div>
//         </div>`
//     }

//     this.getCharacterHtml = function() {
//         const { charName, avatar, health, diceCount, currentDiceScore, diceHtml, setDiceHtml } = this;  
//         return  `<div class="character-card ${(charName === 'Jedi')?'light_side':''}">
//                     <h2 class="name"> ${charName} </h2>
//                     <img class="avatar" src="${avatar}" />
//                     <div class="health">health: <b> ${health} </b></div>
//                     ${this.getHealthBarHtml()}
//                     <div class="dice-container">
//                         ${diceHtml}
//                     </div>
//                 </div>`
//     }

// }

export default Character