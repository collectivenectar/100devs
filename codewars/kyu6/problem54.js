// Parameters: Given a number n, could be negative, even or odd
// Return: Return a formatted string resembling a diamond pattern, where n is
// the number of rows, and n also equals the max width of the diamond in '*' characters.
// Each row should have empty spaces, ' ' before but not after the '*'s in the row.
// Each row should be broken using newline formatting => '\n'.
// If n is negative, even, or zero, return null.

// Example:
// diamond(4) => null
// diamond(3) => " *\n***\n *\n"
// diamond(5) => '  *\n ***\n*****\n ***\n  *\n'

// Pseudocode:

// First eliminated the rare and invalid cases: if n is less than 1, or n is even,
// return null.
// If n is 1, return '*\n'
// Otherwise,
// create a var array 'diamond' to store the rows, later to be joined together with newline
// strings to format it for the results.
// Then, loop from 1 to n to create the first half(plus the middle row)
// For each row, add the number of spaces, which is just n - the current row divided
// by two. Then add the number of *, which is just the current row. Push all this
// to the diamond array.

// After the loop is over, create a slice of the array from the beginning up until
// the last row, reverse it, and push that to the diamond array, too, and then adding
// a final `\n` to the last element.

// then, return the diamond array, rejoined to a string value with `\n` as the joining
// string.

function diamond(n){
  if(n < 1 || n % 2 === 0){
    return null
  }else if(n === 1){
    return `*\n`
  }
  let diamond = []
  for(let row = 1; row <= n; row = row + 2){
    diamond.push(` `.repeat((n - row) / 2) + `*`.repeat(row))
  }
  let tail = diamond.slice(0, diamond.length - 1).reverse()
  tail[tail.length - 1] = tail[tail.length - 1] + `\n`
  diamond.push(...tail)
  return diamond.join(`\n`);
}
console.log(diamond(7))
