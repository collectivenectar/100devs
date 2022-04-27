//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty.
//Please create a function that reverses your list and prints it to the console.

function reverseOrder(arr){
  console.log(arr.reverse())
}

//Given two integer arrays a, b, both of length >= 1, create a program that returns
//true if the sum of the squares of each element in a is strictly greater than the
//sum of the cubes of each element in b.

function sumSquareGreaterCubes(a, b){
  let sumA = 0
  let sumB = 0
  a.forEach(element => sumA = sumA + element ** 2)
  b.forEach(element => sumB = sumB + element ** 3)
  return sumA > sumB? true: false;
}
sumSquareGreaterCubes([1, 2, 3, 4], [2, 2, 2])

//Return a new array consisting of elements which are multiple of their own index
//in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function indexMultiple(arr){
  return arr.filter((element, index) => element % index === 0)
}
console.log(indexMultiple([22, -6, 32, 82, 9, 25]))
//Given an array of integers as strings and numbers, return the sum of the array
//values as if all were numbers.Return your answer as a number.
function sumEvenStrings(arr){
  return arr.map(element => Number(element)).reduce((prev, curr) => prev + curr)
}
console.log(sumEvenStrings(["3", 5, 10, "6"]))
