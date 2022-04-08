function wordList(){
  let wordList = [];
  let input = prompt("Type in a word, or 'stop' to see the list of words you typed")
  while(input != "stop"){
    wordList.push(input)
    input = prompt("Type in another word, or 'stop' to see the list of words you typed")
  }
  alert(wordList)
}
wordList()
