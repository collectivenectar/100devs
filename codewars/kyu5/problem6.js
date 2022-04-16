//return [integer, power] if a given number has a 'perfect power' pairing where
//integer raised exponentially by power results in the given number.

//starting off, just using sqrt or cbrt shows the basic logic returns correct
//results for most cases. I need to solve for all cases.


//first solution was this:
// var isPP = function(n){
//   return Math.sqrt(n) % 1 === 0 || Math.cbrt(n) % 1 === 0? [Math.sqrt(n), 2]: null;
// }

// var isPP = function(n){
//   if(Math.sqrt(n) % 1 === 0){
//     return [Math.sqrt(n), 2]
//   }
//   else if(Math.cbrt(n) % 1 === 0){
//     return [Math.cbrt(n), 3]
//   }
//   else{
//     for(let i = 3; i <= Math.cbrt(n); i++){
//       if(n ** (1 / i) - Math.floor(n ** (1 / i)) < 0.0000001){
//         return [Math.floor(n ** (1 / i)), i]
//       }
//       else if(Math.ceil(n ** (1 / i)) - (n ** (1 / i)) < 0.0000001){
//         return [Math.ceil(n ** (1 / i)), i]
//       }
//       else if(n ** (1 / i) % 1 === 0 && n ** (1 / i) != n){
//         return [n ** (1 / i), i]
//       }
//     }
//   }
//   return null
// }

//refactored to this:
var isPP = function(n){
  for(let i = 2; i <= n - Math.sqrt(n); i++){
    if(n ** (1 / i) - Math.floor(n ** (1 / i)) < 0.0000001){
      return [Math.floor(n ** (1 / i)), i]
    }
    else if(Math.ceil(n ** (1 / i)) - (n ** (1 / i)) < 0.0000001){
      return [Math.ceil(n ** (1 / i)), i]
    }
  }
  return null
}
console.log(isPP(8))
