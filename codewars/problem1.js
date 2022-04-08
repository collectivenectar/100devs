// let romanNums = {
//     1: "I",
//     5: "V",
//     10: "X",
//     50: "L",
//     100: "C",
//     500: "D",
//     1000: "M",
//     "I": 1,
//     "V": 5,
//     "X": 10,
//     "L": 50,
//     "C": 100,
//     "D": 500,
//     "M": 1000,
//   }
// function firstDigit(number){
//   let string = String(number)
//   return Number(string.charAt(0))
// }
// function toRoman(integer){
//   let stringedNumber = String(integer)
//   let chunks = []
//   for(let i = 0; i < stringedNumber.length; i++){
//     chunks.push(stringedNumber[i] * (10 ** (stringedNumber.length - i - 1)))
//   }
//   let roman = chunks.map(function(number) {
//     if(number > 999){
//       let romans = []
//       for(let i = 0; i < firstDigit(number); i++){
//         romans.push(romanNums[1000])
//       }
//       return romans.join("")
//     }
//     else if(number > 499){
//       if(number > 899){
//         return "CM"
//       }
//       else{
//         let romans = ["D"]
//         for(let i = 5; i < firstDigit(number); i++){
//           romans.push(romanNums[100])
//         }
//         return romans.join("")
//       }
//     }
//     else if(number > 99){
//       if(number > 399){
//         return "CD"
//       }
//       else{
//         let romans = []
//         for(let i = 0; i < firstDigit(number); i++){
//           romans.push(romanNums[100])
//         }
//         return romans.join("")
//       }
//     }
//     else if(number > 49){
//       if(number > 89){
//         return "LC"
//       }
//       else{
//         let romans = ["L"]
//         for(let i = 5; i < firstDigit(number); i++){
//           romans.push(romanNums[10])
//         }
//         return romans.join("")
//       }
//     }
//     else if(number > 9){
//       let romans = []
//       for(let i = 0; i < firstDigit(number); i++){
//         romans.push(romanNums[10])
//       }
//       return romans.join("")
//     }
//     else if(number > 3){
//       if(number > 4){
//         let romans = ["V"]
//         for(let i = 5; i < firstDigit(number); i++){
//           romans.push(romanNums[1])
//         }
//         return romans.join("")
//       }
//       else{
//         return "IV"
//       }
//
//     }
//     else{
//       let romans = []
//       for(let i = 0; i < number; i++){
//         romans.push(romanNums[1])
//       }
//       return romans.join("")
//     }
//   })
//   return roman.join("")
// }
// function fromRoman(roman){
//
// }

// function sortArray(array) {
//   let newArray = []
//   let rearrange = {}
//   let odds = []
//   let positions = []
//   for(let i = 0; i < array.length ; i++){
//     if(array[i] % 2 !== 0){
//       rearrange[i] = array[i]
//       odds.push(array[i])
//     }
//   }
//   if(odds.length === 0){
//     return array
//   }
//   else{
//     odds.sort((a, b) => {return a < b ? -1 : 1})
//     positions = Object.keys(rearrange)
//     odds.sort((a, b) => {return a > b ? 1: -1; })
//     newArray = array;
//     for(let i = 0; i < odds.length; i++){
//       newArray[positions[i]] = odds[i]
//     }
//     return newArray
//   }
// }

// let row1 = [1, 2, 3],
//     row2 = [4, 5, 6],
//     row3 = [7, 8, 9],
//     row4 =    [0];
// let adjacents = {
//   1: [2, 4],
//   2: [1, 3, 5],
//   3: [2, 6],
//   4: [1, 5, 7],
//   5: [2, 4, 6, 8],
//   6: [3, 5, 9],
//   7: [4, 8],
//   8: [5, 7, 9, 0],
//   9: [6, 8],
//   0: [8],
// }
//
// function detective(pin){
//
// }
//
// function isValidWalk(walk) {
//   let tracking = {'n': 1, 's': -1, 'w': -1, 'e': 1,};
//   let yAxis = 0;
//   let xAxis = 0;
//   let time = 0;
//   for(let i = 0; i < walk.length; i++){
//     if(walk[i] === 'n' || walk[i] === 's'){
//       yAxis += tracking[walk[i]]
//       time++
//     }
//     else{
//       xAxis += tracking[walk[i]]
//       time++
//     }
//   }
//   if(time === 10 && xAxis === 0 && yAxis === 0){
//     return true
//   }
//   else{
//     return false
//   }
// }
// isValidWalk(['n','s','n','s','n','s','n','s','n','s'])
//
//
// function deleteNth(arr,n){
//   let occurrences = {}
//   for(let i = 0; i < arr.length; i++){
//     if(occurrences[arr[i]]){
//       occurrences[arr[i]] = occurrences[arr[i]] + 1
//     }
//     else{
//       occurrences[arr[i]] = 1
//     }
//   }
//   console.log(Object.keys(occurrences))
//   for(let i = 0; i < Object.keys(occurrences).length; i++){
//     if(occurrences[Object.keys(occurrences)[i]] > n){
//       console.log(Object.keys(occurrences)[i])
//       for(let i = 0; i <= occurrences[Object.keys(occurrences)[i]]; i++){
//         console.log(i + 1, n)
//         if(i + 1 > n){
//           console.log(arr.lastIndexOf(Object.keys(occurrences)[i]), Object.keys(occurrences)[i])
//         }
//       }
//     }
//   }
// }
// deleteNth([1,1,3,3,7,2,2,2,2], 3)
//
// let morse = {
//     '.-':     'a',
//     '-...':   'b',
//     '-.-.':   'c',
//     '-..':    'd',
//     '.':      'e',
//     '..-.':   'f',
//     '--.':    'g',
//     '....':   'h',
//     '..':     'i',
//     '.---':   'j',
//     '-.-':    'k',
//     '.-..':   'l',
//     '--':     'm',
//     '-.':     'n',
//     '---':    'o',
//     '.--.':   'p',
//     '--.-':   'q',
//     '.-.':    'r',
//     '...':    's',
//     '-':      't',
//     '..-':    'u',
//     '...-':   'v',
//     '.--':    'w',
//     '-..-':   'x',
//     '-.--':   'y',
//     '--..':   'z',
//     '.----':  '1',
//     '..---':  '2',
//     '...--':  '3',
//     '....-':  '4',
//     '.....':  '5',
//     '-....':  '6',
//     '--...':  '7',
//     '---..':  '8',
//     '----.':  '9',
//     '-----':  '0',
//   }
//
// function comp(array1, array2){
//   let checked1 = {}
//   let checked2 = {}
//   for(let i = 0; i < array1.length; i++){
//     if(checked1[array1[i]] === undefined){
//       checked1[array1[i]] = 1
//     }
//     else{
//       checked1[array1[i]] = checked1[array1[i]] + 1
//     }
//     for(let j = 0; j < array2.length; j++){
//       if(array1[i] ** 2 === array2[j]){
//         if(checked2[array2[j]] === undefined){
//           checked2[array2[j]] = 1
//         }
//         else{
//           checked2[array2[j]] = checked2[array2[j]] + 1
//         }
//       }
//     }
//   }
//   console.log(checked1, checked2)
//   let matchedCount = 0
//   for(let i = 0; i < array1.length; i++){
//     console.log(i)
//     for(let j = 0; j < array2.length; j++){
//       console.log(checked1[array1[i]], checked2[array2[j]])
//       if(checked1[array1[i]] === checked2[array2[j]] && array1[i] ** 2=== array2[j]){
//         matchedCount++
//       }
//     }
//   }
//   if(matchedCount === array1.length){
//     return true
//   }
//   else{
//     return false
//   }``
// }
// a1 = [121, 144, 19, 161, 19, 144, 19, 11];
// a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
// console.log(comp(a1, a2))

// function diamond(n){
//   let toggle = false
//   for(let i = 0; i < n - Math.floor(n / 2); i++){
//     if(i === n && toggle === false){
//       toggle = true
//       console.log(2 * i + 1)
//     }
//     else if(i < n){
//       console.log(2 * i + 1)
//     }
//     else{
//       console.log(i - Math.floor(n/2))
//     }
//   }
// }
// diamond(5)

function moveZeros(arr){
  console.log(arr)
  let orderedArr = []
  let zeros = []
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0 || arr[i] === "0" || arr[i] === []){
      zeros.push(0)
    }
    else{
      orderedArr.push(arr[i])
    }
  }

  return orderedArr.concat(zeros)
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))
console.log(moveZeros([
  9, 0, 0, 9, 1, 2, 0,
  1, 0, 1, 0, 3, 0, 1,
  9, 0, 0, 0, 0, 9
]))
