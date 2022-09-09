// Parameters: given a number n and a value v
// Return: Return an array of length n where each element is v
// Note: n can't be less than 0, non-number, +- infinity, otherwise throw a typeerror showing
// n is invalid. v should be undefined if not passed as a parameter.
// Example: prefill(3, "33") => ['33', '33', '33']
// prefill(2, prefill(5, 'aeryah')) => [['aeryah','aeryah','aeryah','aeryah','aeryah'],
//                                      ['aeryah','aeryah','aeryah','aeryah','aeryah']]
// Pseudocode:
// First check if n is 0, if so return []
// Then check for n being finite, a number, not a float, 0 or larger
// Otherwise create a new array of length n, and fill it with v
// return the array

function prefill(n, v = undefined) {
  if(n === 0 || n === "0"){
    return []
  }
  else if(isNaN(n) || !Number.isFinite(n) || n % 1 !== 0 || n < 0){
    throw new TypeError(`${n} is invalid`)
  }
  let result = new Array(n).fill(v)
  return result
}
