// Parameters: It's an 80s show based problem, where you teach vicky a 'robot' words
// using the prototype 'Robot', make a function that takes in a word, only alphabetical,
// and if the word has already been learned, return 'I already know the word ${word}'
// If there are non alphabetical characters, return 'I do not understand the input'
// and if it is a new word, return 'thank you for teaching me ${word}'

// checking for the length of the string and a regex test for non alphabeticals to
// filter out invalid words, then see if the word already exists in the dictionary.
// If not, add a lowercase version of it.

// The trick part of the question was that all the return strings I'm supposed to
// provide are technically words the robot already knows(why else would they be able
// to 'speak' them?) so I had to prefill the wordsLearned object with them for the
// function to pass all the tests. har har.

function Robot() {
  let wordsLearned = {
    thank: 'thank',
    you: 'you',
    for: 'for',
    teaching: 'teaching',
    me: 'me',
    i: 'i',
    already: 'already',
    know: 'know',
    do: 'do',
    not: 'not',
    understand: 'understand',
    the: 'the',
    input: 'input'
  }
  let alph = /[a-zA-Z]/
  this.learnWord = (word) => {
    console.log(wordsLearned)
    if(word.length === 0){
      return `I do not understand the input`
    }
    for(let char = 0; char < word.length; char++){
      if(!alph.test(word[char])){
        return `I do not understand the input`
      }
    }
    if(wordsLearned[word.toLowerCase()]){
      return `I already know the word ${word}`
    }
    else{
      wordsLearned[word.toLowerCase()] = word
      return `Thank you for teaching me ${word}`
    }
  }
}
