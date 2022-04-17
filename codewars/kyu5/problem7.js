//I was able to get some iteration in sequence, but not for all variations...
//Maybe there's a way to eliminate non useful elements.
//eliminating elements based on max sum possible proved too complex for different k values

//as of saturday, this is the best version I've got, but it doesn't work AT ALL for cases
//where k is not 3. Stuck on how to make this work now, but working on concepts now

//I now need to start somehow with how many 'trips' can be made total (k),
//This effects how I calculate sums.

//errors I got from codewars:

// 331 2 [ 91, 74, 73, 85, 73, 81, 87 ]
// expected 263 to equal 178

//shows I'm summing a third ls element which puts it over what it expected from two elements

//needs a new approach - How to search through all possible combinations with various
//combination limits like max of 3 trips

//reduce()...can I use reduce()?Reduce will just return a single value typically.
//map()?
// function chooseBestSum(t, k, ls) {
//   console.log(t, k, ls)
//   if(ls.length < k){
//     return null
//   }
//   let bestMatch = 0
//   for(let j = 0; j <= ls.length; j++){
//     for(let k = 1; k <= ls.length; k++){
//       for(let l = 2; l <= ls.length; l++){
//         if(j != k && j != l && k != l){
//           let sum = ls[j] + ls[k] + ls[l]
//         if(sum <= t){
//           if(sum > bestMatch){
//             bestMatch = sum
//           }
//         }
//         }
//       }
//     }
//   }
//   return bestMatch
// }

//TRY 2 :
function chooseBestSum(t, k, ls){
  let test = 30
  let newone = ls.map((element, index, array) => element + array[index + 1] + array[index + 2])
  console.log(newone)
}
//this gets me 3 combinations of 3. lol. more thinking.
//first step: take k, the maximum number of city trips you can make
//out of all the unique k-sized combinations made from ls, which is highest below t?
// array elements combinations

k is 3

possibles = ls.length(k - 1)?

((k + 1) * k) / k * 1 = 4
((k + 1) * k) / k * 2 = 2
((k + 1) * k) / k * 4 = 1
((k + 1) * k) / k * 8 = 1 / 2
((k + 1) * k) / k * 16 = 1 / 4

3 * (6 / 3) = 6
3 * (3 / 3) = 3
3 * (1 / 3) = 1
3 * (3 / 3) = 3
3 * (4 / 3) = 4
3 * (3 / 3) = 3
3 * (1 / 3) = 1
3 * (3 / 3) = 3
3 * (6 / 3) = 6

1 * 5 = 5
3 * 5 = 15
4 * 5 = 20
6 * 5 = 30

arr[0], arr[1], arr[2]
arr[0], arr[1], arr[3]
arr[0], arr[1], arr[4]
arr[0], arr[2], arr[3]
arr[0], arr[2], arr[4]
arr[0], arr[3], arr[4]
arr[1], arr[2], arr[3]
arr[1], arr[2], arr[4]
arr[1], arr[3], arr[4]
arr[2], arr[3], arr[4]

6, 3, 1
3, 4, 3
1, 3, 6

ls.length is 5

if ls.length is 4:

arr[0], arr[1], arr[2]
arr[0], arr[1], arr[3]
arr[0], arr[2], arr[3]
arr[1], arr[2], arr[3]

3, 1
2, 2
1, 3

k is 3

k * (3 / 3) = 3
k * (2 / 3) = 2
k * (1 / 3) = 1
k * (1 / 3) = 1
k * (2 / 3) = 2
k * (3 / 3) = 3

var ts = [50, 55, 56, 57, 58]
console.log(chooseBestSum(163, 3, ts))
