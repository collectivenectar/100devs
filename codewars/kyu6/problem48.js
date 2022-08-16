// Parameters: given a number between 1 and 10000
// Return: on an 88 key piano, if you started at the left most key and went up
// one half step at a time, looping back to the beginning once you reach the end
// would you be on a black key or a white key when you reach the given number?
// return "black" or "white"
// example: blackOrWhiteKey(88) => "white"
// blackOrWhiteKey(10000) => "white"
// blackOrWhiteKey(8885) => "black"

// Pseudocode:

// first, create an array that contains the octave pattern for each black key.
// each octave contains 12 notes, there are 5 black keys, at positions 2, 4, 7, 9, and 11
// Then, get the remaining integer after dividing the given number by 88, the total
// number of keys.
// Then branch off logic if the given remainder is less than 4, since the beginning
// keys of the piano do not start at the beginning of the pattern. If === 2, it's the
// only black key in the first 3, so if not it's white.

// Otherwise, subtract 3 from the remainder to start at the beginning of an octave
// and then divide by 12 to get the relative key in for the octave.
// Then if the number exists in the black array, return 'black', otherwise 'white.'

function blackOrWhiteKey(keyPressCount) {
  let black = [2, 4, 7, 9, 11]
  let keyRef = keyPressCount % 88
  if(keyRef < 4){
    if(keyRef === 2){
      return "black"
    }else{
      return "white"
    }
  } else{
    let offset = keyRef - 3
    let octaveRemainder = offset % 12
    if(black.includes(octaveRemainder)){
      return "black"
    }else{
      return "white"
    }
  }
}
