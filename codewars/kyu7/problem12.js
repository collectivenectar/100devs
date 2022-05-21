// p given an array of 'stops' [thismanypeoplegeton, thismanypeoplegetoff]
// return how many people are still on the bus after the last stop.
// [1, 0] [2, 1] => (1 + 2) - (0 + 1) = 1
// Pseudocode
// create a variable to store the total number of passengers that get on
// '' above, except for passengers that get off
// return the difference between the two variables (first - second)

var number = function(busStops){
  let gotOn = 0
  let gotOff = 0
  for(let stop = 0; stop < busStops.length; stop++){
    gotOn = gotOn + busStops[stop][0]
    gotOff = gotOff + busStops[stop][1]
  }
  return gotOn - gotOff
}
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]))
