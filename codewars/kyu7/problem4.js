//Given a string s, return the length of the shortest word in the string.

// I get an array out of the strings using split, sort the array short to long,
// and return the length of the first element

function findShort(s){
  return s.split(" ").sort((a,b) => {
    if(a.length > b.length){
      return 1
    }
    else if(a.length < b.length){
      return -1
    }
    else{
      return 0
    }
  })[0].length
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
