const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
      'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
      'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
      'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
      'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
      'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
let fifteenHundreds = inventors.filter(x => x.year >= 1500 && x.year < 1600);
// console.log(fifteenHundreds)
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names
let firstAndLast = inventors.map(function(element){return [element.first, element.last]})
// console.log(firstAndLast)
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
let oldestToYoungest = inventors.sort((a, b) => {if(a.year < b.year){
  return -1}
})
// console.log(oldestToYoungest)
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
function reducer(previous, current, index, array){
  const returns = (previous.passed - previous.year) + (current.passed - current.year)
  return returns
}
let totalYearsLived = inventors.reduce(reducer)
    // 5. Sort the inventors by years lived
let inventorsLivedOrder = inventors.sort((a, b) => {if((a.passed - a.year) < (b.passed - b.year)) {
  return -1
}
else{
  return 1
}
})
// console.log(inventorsLivedOrder)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const boulevards = ["des Capucines", "de la Chapelle", "de Clichy", "de l'Amiral-Bruix", "de l'Hopital", "Des Italiens", "de la Madeleine", "de Magenta", "de la Zone", "de Sebastopol", "de Strasbourg"];

    // 7. sort Exercise
    // Sort the people alphabetically by last name
let alphabeticallyLastName = people.sort((a, b) => {
  if(a.charAt(0) < b.charAt(0)){
    return - 1
  }
  else if(a.charAt(0) === b.charAt(0)){
    if(a.charAt(1) < b.charAt(1)){
      return -1
    }
    else if(a.charAt(1) === b.charAt(1)){
      if(a.charAt(2) < b.charAt(2)){
        return -1
      }
      else{
        if(a.charAt(2) === b.charAt(2)){
          if(a.charAt(3) < b.charAt(3)){
            return -1
          }
          else{
            return 1
          }
        }
      }
    }

  }
})
console.log(alphabeticallyLastName)
    // 8. Reduce Exercise
    // Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
const counts = {}
for(let i = 0; i< data.length; i++){
  counts[data[i]]? counts[data[i]]++ : counts[data[i]] = 1;
}
console.log(counts)

// Js info object tasks

let user = {}
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name

function isEmpty(testObject){
  if(Object.keys(testObject).length){
    return false
  }
  else{
    return true
  }
}

let test = {}
console.log(isEmpty(test))

test.infinity = ["loop"]

console.log(isEmpty(test))

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumSalaries(testObject){
  let keys = Object.keys(salaries)
  let sum = 0
  for(let i = 0; i < keys.length; i++){
    sum += testObject[keys[i]]
  }
  console.log(sum)
}
sumSalaries(salaries)

function multiplyNumeric(testObject){
  let keys = Object.keys(testObject)
  for(let i = 0; i < keys.length; i++){
    if(testObject[keys[i]] * 2){
      testObject[keys[i]] = testObject[keys[i]] * 2
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My Menu",
};

multiplyNumeric(menu)
console.log(menu)
