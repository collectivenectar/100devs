// Parameters: Given an array
// Return: Return the array with all elements sorted by value, where the highest occurring value is sorted
// first, and any value with the same frequency is sorted in ascending value.

// Example: 
// solve([3, 3, 5, 1, 7, 7, 2, 9, 5, 5, 3]) => [3, 3, 3, 5, 5, 5, 7, 7, 1, 9]

// Pseudocode:

// getting frequency by map seems easiest, and I can sort the entries of a map by frequency
// and value, so I'm using that. 
// Iterate over the array and increment or add a key and value pair starting at 1 to the 'map' variable.
// sort the entries of that Object and put them into a var 'sorted'
// sort the entries according to frequency first, which is the value, then value second if the frequency
// is equal, so use the key of the object casted as a Number() and compare value.
// Otherwise, just need to loop through the sorted entries, and for each value, push
// that value however many times the frequency is to an array 'results'
// Then return the array results

function solve(arr){
    let map = {}
    for(let each = 0; each < arr.length; each++){
      if(map[arr[each]]){
        map[arr[each]] = map[arr[each]] + 1
      }else{
        map[arr[each]] = 1
      }
    }
    let sorted = Object.entries(map).sort((a, b) => {
      if(a[1] > b[1]){
        return -1
      }else if(a[1] < b[1]){
        return 1
      }else{
        if(Number(a[0]) < Number(b[0])){
          return -1
        }else if(Number(a[0]) > Number(b[0])){
          return 1
        }else{
          return 0
        }
      }
    })
    let results = []
    for(let set = 0; set < sorted.length; set++){
      for(let dupe = 0; dupe < sorted[set][1]; dupe++){
        results.push(Number(sorted[set][0]))
      }
    }
    return results
  }