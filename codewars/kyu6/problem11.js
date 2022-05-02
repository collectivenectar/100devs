//return the number of n cubes that makes the total volume m, given
//that the bottom level of the pile has the volume of n ** 3, and the one above
//that has volume of (n - 1) ** 3.

//I just figured I could start from the top of the pile instead of the bottom.
//starting at 0, then adding i ** 3 until I get the volume m. If I don't get m,
// then there's no solution, and I return -1.

function findNb(m) {
  let sum = 0
    for(let i = 0; i < m; i++){
      if(sum < m){
        sum = sum + i ** 3
      }
      else if(sum === m){
        return i - 1
      }
      else{
        return (-1);
      }
    }
}
