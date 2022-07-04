// Parameters : given two functions, one or the other or both could have multiple parameters
// Return : return a function that returns the first function with the results of the second
// function as it's parameter. i.e. function composition in math, where h(a) = f(g(a))
// Example :
// let add1 = (a) => a + 1
// let add2 = (a) => a + 2
// let composed = compose(add1, add2)
// composed(3) => 6

// Pseudocode:

// at first just returning (a) => f(g(a)) worked for the first set of tests, but when
// g is defined with multiple parameters I got weird issues. Instead just used spread
// operator and it works fine.

function compose(f,g) {
  return (...a) => f(g(...a))
}
