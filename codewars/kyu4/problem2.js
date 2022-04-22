//after looking a bit online, it looks like the simples approach is a mix of what
//I had tried with something new.

//I knew I had to start from bottom up, as that's where I need to start narrowing
// possibilities, but I couldn't figure out how to get from checking one at a time
// to removing one possibility for each row.

//in this, I first add zeros to the earlier arrays so they all have equal length
//then, I begin checking for the largest integer of each adjacent pair in each row
//I create an object to store the sums as I go along since it needs to be mutable
//And I want to start with the last row.
//then as I go along, I add the preceding row at index(same as key name) to the key value
//pair in object that's the largest.

function longestSlideDown (pyramid) {
  for(let i = 0; i < pyramid.length - 1; i++){
    for(let j = pyramid.length - i - 1; j > 0; j--){
      pyramid[i].push(0)
    }
  }
  let sums = Object.assign({}, pyramid[pyramid.length - 1])
  for(let j = pyramid.length - 2; j >= 0; j--){
    for(let k = 0; k < Object.keys(sums).length - 1; k++){
      if(sums[k] >= sums[k + 1]){
        sums[k] = sums[k] + pyramid[j][k]
      }else{
        sums[k] = sums[k + 1] + pyramid[j][k]
      }
    }
  }
  return Object.values(sums).sort((a, b) => {
    if(a < b){
      return 1
    }
    else if(a > b){
      return -1
    }
    else{
      return 0
    }
  })[0]
}

console.log(longestSlideDown(
 [[75],
  [95, 64],
  [17, 47, 82],
  [18, 35, 87, 10],
  [20,  4, 82, 47, 65],
  [19,  1, 23, 75,  3, 34],
  [88,  2, 77, 73,  7, 63, 67],
  [99, 65,  4, 28,  6, 16, 70, 92],
  [41, 41, 26, 56, 83, 40, 80, 70, 33],
  [41, 48, 72, 33, 47, 32, 37, 16, 94, 29],
  [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14],
  [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57],
  [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48],
  [63, 66,  4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31],
  [ 4, 62, 98, 27, 23,  9, 70, 98, 73, 93, 38, 53, 60,  4, 23]]))
