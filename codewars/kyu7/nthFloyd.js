function nthFloyd(n){
  //Given a number, find which row that number appears in Floyds Triangle.
  //After trying with arrays, I hit an efficiency problem and went to math
  //So, inside a for loop, increasing by 1 from 1, counting the rows in the triangle,
  //Checking if the next final value in the series is equal or greater than the given
  //number. If so, returns the current loop count. Way way more efficient, and shows
  //how a little algebra can significantly impact efficiency. n^2 = n^1(n^1 + 1) / 2
  for(let i = 1; i < n; i++){
    if((i * (i + 1)) / 2 > n){
      return i
    }
  }
}

console.log(nthFloyd(155353))
