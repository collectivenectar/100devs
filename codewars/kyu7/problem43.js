// Implement a function which takes a sequence of objects and a property name, 
// and returns a sequence containing the named property of each object.

// Parameters: Given an array of objects, each object possibly containing more than
// one key/value pair. Also given an object key 'name' to look for in the objects

// Return: For each object in the list, if the object key exists, place the value
// corresponding to that key in an array. If the object key doesn't exist, add undefined
// to that position in the array.

// Example: pluck([{'a': 1}, {'a': 2, 'b': 4}, {'a': 0, 'b': 1}], 'b') => [undefined, 4, 1]

// Pseudocode:
// first create an array 'names' to store the results in.
// Then loop from beginning to end, and for each object:
// look for if the key exists in the object
// if it exists, push the value at that key into the 'names' array
// Otherwise, push the value 'undefined' into the 'names' array

// Then, return the results, i.e. the 'names' array

function pluck(objs, name) {
  let names = []
  for(let each = 0; each < objs.length; each++){
    if(objs[each][name]){
      names.push(objs[each][name])
    }
    else{
      names.push(undefined)
    }
  }
  return names
}
