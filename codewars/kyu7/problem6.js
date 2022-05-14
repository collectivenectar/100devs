// for each array, return the max and min value for array
// by sorting just choose the first or last

function minMax(arr){
  return [arr.sort((a, b) => {
    if(a < b){
      return -1
    }
    else if(a > b){
      return 1
    }
    else{
      return 0
    }
  })[0], arr.sort((a, b) =>{
    if(a < b){
      return 1
    }
    else if(a > b){
      return -1
    }
    else{
      return 0
    }
  })[0]];
}
