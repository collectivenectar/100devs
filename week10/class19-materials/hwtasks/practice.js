function allForOne(){
  let musketeers = ["Athos", "Porthos", "Aramis"]
  for(let i = 0; i < musketeers.length; i++){
    console.log(musketeers[i])
  }
  musketeers.push("D'Artagnan")
  musketeers.forEach(musketeer => {console.log(musketeer)})
  musketeers.splice(2, 1)
  for(const musketeer of musketeers){
    console.log(musketeer)
  }
}

// allForOne()
const values = [3, 11, 7, 2, 9, 10];
function sumValues(){
  let sum = 0;
  values.forEach(value => {sum += value})
  return sum
}
// sumValues()

const testingArray = [4, 7, 2]

function arrayMaximum(arraytest){
  let highestSoFar = 0;
  arraytest.forEach(element => {if(element > highestSoFar){
    highestSoFar = element;
  }});
  return highestSoFar
}
arrayMaximum(testingArray)


// js info tasks

function camelize(string){
  let newString = string.split("-")
  newString.forEach((element, index, array) => {
    array[index] = element.charAt(0).toUpperCase() + element.substr(1, element.length)
  })
  return newString.join("")
}
// camelize("something-else")
// let arr = [5,3,8,1]
function filterRange(arr, a, b){
  let filter = []
  for(const element of arr){
    if(element >= a && element <= b){
      filter.push(element)
    }
  }
  return filter
}
// let filtered = filterRange(arr, 1, 4)
// alert(filtered)

function filterRangeInPlace(arr, a, b){
  arr = arr.filter(element => element <= b && element >= a)
}
// filterRangeInPlace(arr, 1, 4)

// let arr = [5, 2, 1, -10, 8]
// arr.sort((a, b) => {if(b > a){
//   return 1
// }
// else if(b < a){
//   return -1
// }
// else{
//   return 0
// }})

// let arr = ["HTML", "Javascript", "CSS"]
// let count = {};
// function persistence(num) {
//   if(num < 10 && !count[num]){
//     return 0
//   }
//   else{
//     let split = String(num).split("")
//     let newNum = (array) =>{
//       let product = split[0]
//       for(let i = 1; i < split.length; i++){
//         product *= split[i]
//       }
//       return product
//     }
//     if(newNum(split) > 9){
//       if(count[num] === undefined){
//         count[num] = 1
//       }
//       else{
//         count[num] = count[num] + 1
//         console.log(count[num])
//       }
//       return persistence(newNum(split))
//     }
//     else{
//       if(!count[num]){
//         count[num] = 1
//       }
//       else{
//         count[num] = count[num] + 1
//       }
//       return count[num]
//     }
//   }
// }
// console.log(persistence(39))


function towerBuilder(nFloors) {
  let tower = []
  if(nFloors === 1){
    return ["*"]
  }
  else{
    for(let i = 1; i <= nFloors; i++){
      let asterisks = ""
      let blanks = ""
      for(let j = 1; j <= i; j = j + 1/2){
        asterisks += "*"
      }
      for(let k = nFloors - i; k > 0; k--){
        blanks += " "
      }
      tower.push(blanks + asterisks + blanks)

    }
    return tower
  }

}
console.log(towerBuilder(2))
