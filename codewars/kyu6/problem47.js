// Parameters: Given an array of integers, and the number of times to 'fold' the array
// Return: For each 'run', 'fold' the array in half, adding the last element value to the
// first elements value, second to last to the second, etc. If it's an odd lengthed
// array, then the middle element is untouched.
// Example:

// let arrayTest = [1, 2, 3, 4, 5]
// foldArray(arrayTest, 1) => [6, 6, 3]
// foldArray(arrayTest, 2) => [9, 6]

// Pseudocode:

// The same process is going to happen over and over, so I could use a while loop
// and just do it like a for loop. Setting a var to 0 and incrementing it and
// having the while check the var value until the number of runs is equal to the var.

// create a temporary 'newArray' variable and set it to the given array. This is going
// to be the holder for multiple runs, so each time newArray is set to the recently
// folder array, to be folded again if necessary in the next while loop.

// inside the loop:

// If the array length is even, then:
// slice the first half of the array and put it into a variable, firstHalf
// slice the second half of the array and put it into a variable, too, secondHalf
// Then .reverse() that array, like 'folding' it
// create a new empty array, results
// Loop through from 0 to half the length of the given newArray.
// add the values together from first and second half, and push it to results
// set the newArray equal to the results(to start over if needed)

// If the array length is odd, then:
// do the same as the above, only since slicing it in the middle in an odd array
// leaves the middle, so I just save it to a var and push it after I've added the
// first and second half arrays together.

// after the while loop is over, return whatevers left in newArray.


function foldArray(array, runs)
{
  let run = 0
  let newArray = array
  while(run < runs){
    if(newArray.length % 2 === 0){
      let firstHalf = newArray.slice(0, (newArray.length / 2))
      let secondHalf = newArray.slice(newArray.length / 2, newArray.length).reverse()
      let results = []
      for(let fold = 0; fold < newArray.length / 2; fold++){
        results.push(firstHalf[fold] + secondHalf[fold])
      }
      newArray = results
    }else{
     let firstHalf = newArray.slice(0, Math.floor(newArray.length / 2))
     let middle = newArray[Math.floor(newArray.length / 2)]
     let secondHalf = newArray.slice(Math.ceil(newArray.length / 2), newArray.length). reverse()
     let results = []
     for(let fold = 0; fold < Math.floor(newArray.length / 2); fold++){
       results.push(firstHalf[fold] + secondHalf[fold])
     }
     results.push(middle)
     newArray = results
    }
    run++
  }
  return newArray;
}
console.log(foldArray(arrayTest, 1))
