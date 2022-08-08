// Parameters: Given a portion of a word as 'input', and a dictionary to check for
// occurrences of words beginning with that portion of a word. a.k.a. autocomplete
// input can have non-alphabetical characters, treat them like they don't exist,
// i.e. "n#%&%##(@_)ope" should be treated as "nope"
// Return: Return a maximum of 5 words from the dictionary in order of appearance
// that begin with the values from input.
// Example: autocomplete("he", ["hello", "helping", "hollow", "igloo", "jumpers", "oblong"])
// returns => ["hello", "helping"]

// Pseudocode:
// create a regex test for alphabeticals
// filter the input using the regex test
// create an array to store found words
// loop through the dictionary to search for occurrences of the value in the filtered
// input by each word
// for each word, create a boolean variable to trigger if the filtered input does not
// match the word.
// add a nested loop to search by each letter of the word
// first step is to check if the letter is undefined to catch empty strings
// if so trigger the boolean variable by setting it to true
// otherwise see if the letter is not present at the same index in the filtered
// input string
// end the nested letter loop, but continuing the word loop,
// if the boolean variable is still true, the word is a match, push it to the
// autocomplete array, provided the array length is still less than 5.
// end the word loop, and return the autocomplete array.


function autocomplete(input, dictionary){
  let letters = /[a-zA-Z]/
  let filtered = input.split("").filter(x => letters.test(x)).join("")
  let autocomplete = []
  for(let word = 0; word < dictionary.length; word++){
    let wordTest = dictionary[word]
    let failed = false
    for(let letter = 0; letter < filtered.length; letter++){
      if(wordTest[letter] === undefined){
        failed = true
      }
      else if(filtered[letter] !== wordTest[letter].toLowerCase()){
        failed = true
      }
    }
    if(!failed && autocomplete.length < 5){
      autocomplete.push(dictionary[word])
    }else{
    }
  }
  return autocomplete
}
