// Parameters : Given a polynomial expression, with no exponent below 0, and
// terms with coefficients will always have a number next to x unless the coefficient
// is -1 or 1
// Return : Calculate the 'equation' expressions derivative, and return the value of that
// derived expression at a given point, 'point'
// Example: differentiate("x^2-x", 2) => 3
// Pseudocode:

// Okay, so first, break the equation into individual terms:
// Create an array to store them, and a temp group for iterating through one character
// at a time. Using a filter for +/-, each term is moved character by character into
// the tempGroup string variable, and then another +/- is found, temp group is pushed
// to the array, then 'emptied' for the next term.

// Once I have each term separated, it's time to derive - For simple differentials,
// Constants disappear, linear terms(i.e. 14x) turn into only their coefficients(14), and exponential
// terms (2x^2) have a two step process: First, the new coefficient is equal to
// the old coefficient times the exponent ((2)x^2 => (4)x^2). Second, the new exponent
// is equal to the old exponent minus 1 (4x^(2) => 4x^1, or simply 4x).

// To do this, I need to do some tricky splitting and slicing to parse each term
// and compute the derivative dynamically.

// If the term has an 'x' in it, it's at least NOT a constant.
// If the term has a '^' in it, it's a term with an exponent.
// Because terms at the beginning of a polynomial don't put a '+' if the term is
// positive, I have to make some funny rules to work with all positive terms.
// terms with a '-' in front of them are a bit easier to work with consistently,
// but I still need to catch any terms where the coefficient is 1, since there will
// be no character that represents that coefficient lexically. So, I just use string
// length differences to determine how to handle it.

// Once I have these figured out, it's easier to just calculate the sum of each term,
// push it to an array, and reduce the array. It would be faster to just add the sums
// to a variable, but it was easier for tracking bugs in the logic.

function differentiate(equation, point){
  let terms = []
  let tempGroup = ""
  for(let char = 0; char < equation.length; char++){
    if(char === 0){
      tempGroup = tempGroup + equation[char]
    }
    else if(equation[char] === "+" || equation[char] === "-"){
      terms.push(tempGroup)
      tempGroup = equation[char]
    }
    else if(char < equation.length - 1){
      tempGroup = tempGroup + equation[char]
    }
    else{
      tempGroup = tempGroup + equation[char]
      terms.push(tempGroup)
    }
  }
  let derivative = []
  for(let term = 0; term < terms.length; term++){
    if(terms[term].includes("x")){
      if(terms[term].includes("^")){
        let split = terms[term].split("x")
        let oldCoefficient
        let exponent = Number(split[1].slice(1, split[1].length))
        if(split[0].includes("-" || "+")){
          if(split[0].length > 1){
            oldCoefficient = Number(split[0])
          }
          else{
            oldCoefficient = Number(`${split[0]}1`)
          }
        }
        else{
          oldCoefficient = split[0].length === 0? 1: split[0];
        }
        let newExponent = exponent - 1 === 1? 1: exponent - 1;
        let newCoefficient = exponent * oldCoefficient
        derivative.push((point ** newExponent) * newCoefficient)
      }
      else{
        let newCoefficient = terms[term].split("x")[0]
        if(newCoefficient.length > 1){
          derivative.push(Number(newCoefficient))
        }
        else{
          derivative.push(Number(`${newCoefficient}1`))
        }
      }
    }
  }
  return derivative.reduce((prev, curr) => { return prev + curr})
}
console.log(differentiate("-2x^3+3x-3", 354))
