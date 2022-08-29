// Parameters: given an array of strings, each string is the name of a person
// Return: Any name that has a string length of 4 is a friend, return all the
// friends in the array.

// Example: friend(["Joe", "Jerry", "James", "John"]) => ["John"]

// Pseudocode: using the filter array method, return only the strings that have
// the length property of 4.

function friend(friends){
  return friends.filter(friend => friend.length === 4)
}
