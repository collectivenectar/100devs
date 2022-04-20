// Given a string like var = s below, return full names sorted by last name then first name,
//in the format like this:

//'(LASTNAME1, FIRSTNAME1)(LASTNAME2, FIRSTNAME2)'

//Started first by putting whole names into an array, switching last and first order in each element after splitting,
//and then feed through a recursive alphabetical sorting function, including a "*" between last and first for
//rearranging later.
//once sorted, rearrange using split("*"), and use string literals to compose in the right format.
//Final solution required modifying the recursive function to conclude one string is to be sorted before the
//other if its letters match up, but one is shorter than the other, i.e. alex vs alexis, sorts alex as first.
//I'd string it all together in one line, but it'd probably just look awkward.


s = "Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"

function recurseSort(string1, string2){
  if(string1[0].toLowerCase() < string2[0].toLowerCase()){
    return true
  }
  else if(string2[0].toLowerCase() < string1[0].toLowerCase()){
    return false
  }
  else{
    return recurseSort(string1.slice(1, string1.length), string2.slice(1, string2.length))
  }
}

function meeting(s){
  let fullNames = s.split(";").map(fullName => [fullName.split(":")[0].toUpperCase(), fullName.split(":")[1].toUpperCase()])
  let lastNamesFirst = fullNames.map(firstLast => firstLast[1] + "*" + firstLast[0])
  let sorted = lastNamesFirst.sort((a, b) => {
    if(recurseSort(a, b)){
      return -1
    }
    else{
      return 1
    }
  })
  return sorted.map(lastNamesFirst => `(${lastNamesFirst.split("*")[1]}, ${lastNamesFirst.split("*")[0]})`).join("")
}
console.log(meeting(s))
