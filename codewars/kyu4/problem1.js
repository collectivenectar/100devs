//Hefty kyu4 problem. providing a well ordered string of entries for a comparison between two strings.
//from the two strings, provide a string with the highest number of occurrences of lower case letters,
//not including 1, if equal don't put the number just put =:nnn or =:qqqqq and it goes after unequal comparisons.


// stringsmix

// compare the two objects. Does one include a reoccurrence the other doesnt?
// Do they both contain reoccurrences the other doesnt?
// Do they both have the same reoccurrences?
// Object.keys(s1Count) gives me an array of key names
// I can compare arrays to see if one array includes all the same elements,
// But what good does that do me?
// Still have to iterate over each one and add it to the string anyways
// Looks like unless there's an object method just for comparing object keys and values,
// I'm stuck with iterating over Object.keys(s1Count || s2Count) one at a time, comparing the
// values for each key, and then storing the count Object array position, and the character
// multiplied by reoccurrence count as a string, ALL into an array. Which needs to be sorted
// by reoccurrence first, then alphabetically by keyname second. equals with same reoccurrences
// sorted alphabetically by keyname, after all other letters that were unequal reoccurrences
// so,:

// starting with compare[0], then compare[1], go through each Object.keys(compare[i]) and
// see if that same key is present in the other object. if compare[0], look in compare[1].
// if compare[1], look in compare[0].

// if the key is present, compare the values in compare[0][key] to compare[1][key]
// if one is larger, push the string `${i + 1}:${keyName * frequency}` into an array finalResults.
// if one is smaller, do nothing.
// if one is equal, check if there already exists a string `=:${keyName * frequency}` in finalResults
// then if not present, push the string `=:${keyName * frequency}` to finalResults
// let string = finalResults.sort()
// according to the rules in order:
// first by frequency in what comes after a `=:` or `[1-2]:`
// then by alphebetical order : what letter is the first character after `=:` or `[1-2]:`
// then by `=` or `[1-2]`, `[1-2]` first
// then join the array
//
// So first, the arrays come sorted by numerical value first, then alphabetical. so most of the sorting
// work is already done.


//finally worked it out, with a lot of elbow grease in the sorting section at the end.
function mix(s1, s2) {
  let counter = (string) => {
    let freq = {}
    freq.reoccurrencesOnly = {}
    for(let character = 0; character < string.length; character++){
      let l = string[character]
      if(/[a-zA-Z]/.test(l) && l.toLowerCase() === l){
        if(freq[l]){
          freq[l] = freq[l] + 1
         freq["reoccurrencesOnly"][l] = freq[l]
        }
        else{
          freq[string[character]] = 1
        }
      }
    }
    return freq
  }
  let s1Count = counter(s1).reoccurrencesOnly
  let s2Count = counter(s2).reoccurrencesOnly
  let compare = [s1Count, s2Count]
  let finalResults = []
  for(let i = 0; i < 2; i++){
    if(i === 1){
      let keys = Object.keys(compare[1])
      for(let k = 0; k < keys.length; k++){
        let s2Key = keys[k][0]
        let winner = new Array(compare[1][s2Key]).fill(s2Key).join("")
        if(compare[0][keys[k][0]]){
          if(compare[0][s2Key] < compare[1][s2Key]){
            finalResults.push(`2:${winner}`)
          }
          else if(compare[0][s2Key] > compare[1][s2Key]){
          }
          else{
            finalResults.push(`=:${winner}`)
          }
        }
        else{
          finalResults.push(`2:${winner}`)
        }
      }
    }
    else{
      let keys = Object.keys(compare[0])
      for(let eachKey = 0; eachKey < keys.length; eachKey++){
        let s1Key = keys[eachKey][0]
        if(compare[1][keys[eachKey][0]]){
          if(compare[1][s1Key] < compare[0][s1Key]){
            let winner = new Array(compare[0][s1Key]).fill(s1Key).join("")
            finalResults.push(`1:${winner}`)
          }
          else if(compare[1][s1Key] > compare[0][s1Key]){
          }
        }
        else{
          let winner = new Array(compare[0][s1Key]).fill(s1Key).join("")
          finalResults.push(`1:${winner}`)
        }
      }
    }
  }
  return finalResults.sort((a, b) => {
    if(a.slice(2, a.length).length > b.slice(2, b.length).length){
      return -1
    }
    else if(a.slice(2, a.length).length < b.slice(2, b.length).length){
      return 1
    }
    else{
      if(a.slice(0, 1) < b.slice(0, 1)){
        return -1
      }
      else if(a.slice(0, 1) > b.slice(0, 1)){
        return 1
      }
      else{
        if(a.slice(2, 3) < b.slice(2, 3)){
          return -1
        }
        else{
          return 1
        }
      }
    }
  }).join("/")
}

console.log(mix("looping is fun but dangerous", "less dangerous than coding"))
