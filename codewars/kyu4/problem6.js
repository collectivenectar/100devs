// Create a warrior class with methods and properties for engaging in training
// and battles.

// Parameters - Warrior.level(), .experience()
// .training(["achievementText", xpPoints, trainingLevel]), .rank(), .battle(opponentLevel)
// Return the level, experience points, the result of the training, the rank name(not 1-10),
// the result of the battle. Based on some complex rules, the warrior can't train or
// battle with training or opponents beyond a certain level, and experience is
// capped(clamped) at 10000
// Example: let bluto = new Warrior(), bluto.training(["eat canned spinach", 10000, 10])
// should return 'Not strong enough'
// Pseudocode
// begin with the constructor setting up level, rank, achievements, experience,
// and something to store the rank names

// set up setters and getters for the warrior object rank/level/achievements/exp

// set up an updater that takes new exp from events and adjusts warrior level/rank/exp

// training method - check for the training level first, and if sufficient add xp
// to _experience and add the achievement string to _achievements array

// battle method - check for invalid opponent levels first
// then calculate the level difference in order to see if the opponent is weaker
// or stronger - stronger opps => more xp, too strong means you lose, too weak
// => no xp


class Warrior{
  constructor(_level, _rank, _achievements, _experience){
    this._level = 1;
    this._rank = 0
    this._achievements = []
    this._experience = 100
    this._ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"]
  }
  level(){
    if(Math.ceil(this._experience / 100) > this._level){
      this._level = Math.floor(this._experience / 100)
      this._rank = Math.floor(this._level / 10)
      return this._level
    }
    else{
      return this._level
    }
  }
  achievements(){
    return this._achievements
  }
  experience(){
    return this._experience
  }
  rank(){
    return this._ranks[this._rank]
  }
  updateStats(exp){
    if(this._experience + exp > 10000){
      this._experience = 10000
      this._level = 100
      this._rank = 10
    }
    else{
      this._experience = this._experience + exp
      this._level = Math.floor(this._experience / 100)
      this._rank = Math.floor(this._level / 10)
    }
  }
  training(array){
    let achieveText = array[0]
    let exp = array[1]
    let trainingLevel = array[2]
    if(this._level >= trainingLevel){
      this._achievements.push(achieveText)
      this.updateStats(exp)
      return achieveText
    }
    else{
      return "Not strong enough"
    }
  }
  battle(opponentLevel){
    let levelDiff = this._level - opponentLevel
    let rankDiff = Math.floor(opponentLevel / 10) - Math.floor(this._level / 10)
    if(opponentLevel > 100 || opponentLevel <= 0){
      return "Invalid level"
    }
    else if(levelDiff <= -5 && rankDiff > 0){
      return "You've been defeated"
    }
    else{
      if(levelDiff >= 2){
        return "Easy fight"
      }
      else if(levelDiff <= 1 && levelDiff >= 0){
        if(levelDiff === 1){
          this.updateStats(5)
        }
        else{
          this.updateStats(10)
        }
        return "A good fight"
      }
      else{
        this.updateStats((levelDiff ** 2) * 20)
        return "An intense fight"
      }
    }
  }
}
