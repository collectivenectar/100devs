// parameters: given an array, could be empty, could have elements made up of different integers
// return: [] if null or empty array, otherwise the array, but sorted from least to greatest
// example: given [2, 8, 110, 43, 70], return [2, 8, 43, 70, 110]
// pseudocode:
// if the array given is empty or null, return [] immediately
// otherwise take num and use .sort(), according to value
// value needs to be checked as Number, to avoid comparing it as a string
// converted to ternary:

function solution(nums){
return nums === null || nums === []? []:nums.sort( (a, b) => {
  if(Number(a) > Number(b)){
    return 1
  }
  else if(Number(a) < Number(b)){
    return -1
  }
  else{
    return 0
  }
})
};
