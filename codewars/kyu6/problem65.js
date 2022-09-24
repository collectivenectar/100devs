// Parameters: Given a pokemon style set of parameters to calculate a hit amount
// yourType and opponentType are both strings, one of only four types, attack is
// your damage amount, and defense is the opponents defense rating.

// Return: Return the total hit points using the formula
// dmg = 50 * (attack / defense) * effectiveness
// Where effectiveness is rated according to each types weakness, advantage, or equality
// in the pokemon element type.
// with an advantage, dmg is * 2, with neutrality, * 1, and with a disadvantage * 0.5

// Example: 

// calculateDamage("electric", "water", "25", "25") => 100
// 50 * (25 / 25) * (2) => 100

// Pseudocode:

// So I started by just creating the data, which took a minute, but made the checking pretty easy.
// objects make it pretty easy to search using .includes() on either arrays or strings, so whenever
// an element has more than one adv, disadv, or neutral, I just put it in an array.
// Otherwise, I just loop through the types object, looking through the 3 damage offset groups:
// adv, disadv, or neutral. If while in adv I find my type, "water", has a match for the opponents
// type "fire", then I know to give the advantage to my type, and return
// the value for adv in the effect object.

// Then I use the given formula and return the damage amount.

function calculateDamage(yourType, opponentType, attack, defense){
    let types = {
      adv: {
        fire: "grass",
        water: "fire",
        grass: "water",
        electric: "water",
      }, 
      disadv: {
        fire: ["water", "fire"],
        water: ["grass", "electric", "water"],
        grass: ["fire", "grass"],
        electric: "electric",
      }, 
      neutral: {
        fire: ["electric"],
        grass: ["electric"],
        water: "",
        electric: ["grass", "fire"]
      }
    }
    let effect = {
      adv: 2.0,
      disadv: 0.5,
      neutral: 1.0
    }
    let match = (yourType, opponentType) => {
      let effects = Object.keys(types)
      let yourDmg
      for(let check = 0; check < effects.length; check++){
        if(types[effects[check]][yourType].includes(opponentType)){
          yourDmg = effect[effects[check]]
        }
      }
      return yourDmg
    }
    let effectiveness = match(yourType, opponentType)
    let damage = 50 * (attack / defense) * effectiveness
    return damage
  }