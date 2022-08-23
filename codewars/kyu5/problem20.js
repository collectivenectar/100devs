// Parameters: given a series of cardinal directions, as an array of strings, each element
// either upper completel lower case or first letter capitalized.

// Return: Return the directions with all the unnecessary directions removed. To explain:
// If there are two elements with the directions "east" and "west" right next to each other,
// remove them from the array. The same with "north" and "south". Dont forget that after
// You remove two elements, you may find more pairs that are now adjacent to each other
// that weren't before.

// Example:
// dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]) => "WEST"

// Pseudocode:

// Best solution I could think of was recursive. Each time I'll need to search through
// the entire array, and the moment I find one, stop - remove that pair, and start
// over again looking through a new array copy that has the pair already removed.

// Starting with the directions, I just enumerated them with negative and positive
// values of 1 or 2 so they can be compared. If by adding them together the result
// is 0, then they are opposite directions.

// Then begin the recursive search.

// create a temp array to store paired elements to remove
// Then loop through the array, looking for adjacent elements that when added
// together (using the 'dir' enum object) cancel out to 0. If a pair is found,
// Add it to the toRemove array.

// If none are found, return the array.

// If a pair is found, remove the pair, and then return the value of calling the
// function (itself) again on the newly modified array.


function dirReduc(arr){
  let dir = {
    "north": 1,
    "south": -1,
    "east": 2,
    "west": -2
  }
  let recurse = (array) => {
    let toRemove = []
    for(let each = 0; each < array.length - 1; each++){
      let curr = array[each].toLowerCase()
      let next = array[each + 1].toLowerCase()
      if(dir[curr] + dir[next] === 0){
        toRemove.push(each)
        toRemove.push(each + 1)
        break
      }
    }
    if(toRemove.length > 0){
      let newArray = array.filter((el, index) => {
        if(index !== toRemove[0] && index !== toRemove[1]){
          return el
        }
      })
      return recurse(newArray)
    }else{
      return array
    }
  }
  return recurse(arr)
}

let test = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
dirReduc(test)
