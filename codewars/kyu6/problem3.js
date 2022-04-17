//given an array of random numbers, count the occurrence of each element,
//and return the element value with the highest occurance. if there is a tie
//between highest occurrence, return the element value that is greater.


//final solution, probably could do with refactoring...sort the array,
//then using subarrays, move each element one at a time - if the element
//is the same as the last one, put it into the same subarray, otherwise
//create a new one.
//Then, using splice on a two element array, I look through comparing the
//current longest subarray with the one I'm looking at. As per instructions,
//when the length is the same, compare element value itself.
function highestRank(arr){
  let sorted = arr.sort((a, b) => {
    if(a < b){
      return - 1
    }
    else if(a > b){
      return 1
    }
    else{
      return 0
    }
  })
  let arrays = []
  for(let i = 0; i < sorted.length; i++){
    if(arrays.length > 0){
      if(arrays[arrays.length - 1][0] === sorted[i]){
        arrays[arrays.length - 1].push(sorted[i])
      }
      else{
        arrays[arrays.length] = [sorted[i]]
      }
    }
    else{
      arrays[0] = [sorted[i]]
    }
  }
  let highestRank = [0, 0]
  for(let j = 0; j < arrays.length; j++){
    if(arrays[j].length > highestRank[1]){
      highestRank.splice(1, 1, arrays[j].length)
      highestRank.splice(0, 1, j)
    }
    else if(arrays[j].length === highestRank[1]){
      if(arrays[highestRank[0]][0] < arrays[j][0]){
        highestRank.splice(1, 1, arrays[j].length)
        highestRank.splice(0, 1, j)
      }
    }
  }
  return arrays[highestRank[0]][0]
}

var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]
console.log(highestRank(arr))
