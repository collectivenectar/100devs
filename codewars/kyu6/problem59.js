// Parameters: Given an array with subarrays, of unknown length and depth
// Return: Return the total number of elements(counting an array as an element, if nested)

// Example: deepCount([1, 2, 3, [2, 3, 4, [7, 8, 9]]]) => 11

// Pseudocode:

// So it needs to be recursive to get any nested arrays
// So I just created a nested recursive function, passing in any array as a parameter
// Then, I declare a localCount variable to store that recursive layers results
// Then, if the array has a length, I loop through it, adding to localCount either 1 for
// each element, or recursively calling the function again with the nested array, and adding
// the return value to the localCount variable.
// at the end of the function, I return the localCount value
// Then I just return the results of calling the nested function

function deepCount(a){
    let search = (array) => {
      let localCount = 0
      if(array.length){
        for(let each = 0; each < array.length; each++){
          if(Array.isArray(array[each])){
            localCount = localCount + search(array[each])
            localCount++
          }else{
          localCount++
          }
        }
      }
      return localCount
    }
    return search(a)
  }
