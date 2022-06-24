// Parameters: Given a string which could have upper and lower case, or all upper case
// letters
// Return : Return the string 'Hello [name]!' , where the first letter of the name
// is capitalized, and the rest are lower case.
// Example: greet("GEORGE") => "Hello George!", greet("mara") => "Hello Mara!"
// Pseudocode:

// using string literals, compose the string using the first character of name
// converted to uppercase,
// then slice the remaining characters of the name string converted to lower case


var greet = function(name) {
  return `Hello ${name.charAt(0).toUpperCase()}${name.slice(1, name.length).toLowerCase()}!`
};
