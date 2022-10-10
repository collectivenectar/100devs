// Parameters: Given a string of integers and a chunk size as an integer

// Return: Given the chunk size, split the string into those chunks, ignoring
// any remainder left from the string.
// If the sum of the cubes of the chunks digits is divisible by 2, reverse the string chunk
// Otherwise, rotate the string chunk to the left, removing the first and placing it last
// Then return the resulting string of integers.

// Example: 
// revrot("12345678910111213141516", 3) => "321564987101211311514"
// revrot("12345678910111213141516", 2) => "2143658719101112131415"

// Pseudocode:

// First eliminate invalid inputs - if chunk size is 0 or negative, if str is "", if
// chunk size is larger than str length, ALL return "" if so

// Then, create a final 'results' array, and a 'chunks' array to temporarily hold the chunks
// as the string is broken up.

// Then, loop through the string using the chunk size as the meter for incrementation in the loop.
// Push each chunk to the chunks array.

// Then, loop through the chunks array, calculating the cubes sum and checking even or odd.
// If even, split the chunk into an array, reverse the array, then rejoin it as a string and 
// push it to the results array.
// If odd, split into an array, remove the first element and place it at the end of the array,
// rejoin it as a string, and push it to the results array.

// Finally, rejoin the results array to string and return the string.

function revrot(str, sz) {
    if(sz <= 0 || str === "" || sz > str.length){
      return ""
    }else{
      let results = []
      let chunks = []
      let upperLimit = str.length - (str.length % sz)
      for(let chunkSz = 0; chunkSz < upperLimit; chunkSz = chunkSz + sz){
        let chunk = str.slice(chunkSz, chunkSz + sz)
        chunks.push(chunk)
      }
      for(let chunk = 0; chunk < chunks.length; chunk++){
        let sumCubes = 0
        for(let digit = 0; digit < chunks[chunk].length; digit++){
          sumCubes = sumCubes + chunks[chunk][digit] ** 3
        }
        if(sumCubes % 2 === 0){
          results.push(chunks[chunk].split("").reverse().join(""))
        }else{
          let array = chunks[chunk].split("")
          let end = array.shift()
          array.push(end)
          results.push(array.join(""))
        }
      }
      return results.join("")
    }
 }

 console.log(revrot("12345678910111213141516", 2))