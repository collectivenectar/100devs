// Parameters: Given an IP address
// Return: Return the IP address 'defanged' - where each '.' has been converted to an '[.]'
// Examples:

// defangIPaddr("0.0.0.0") => "0[.]0[.]0[.]0"
// defangIPaddr("127.0.0.1") => "127[.]0[.]0[.]1"
// defangIPaddr("255.255.255.255") => "255[.]255[.]255[.]255[.]"

// Pseudocode:

// Since it's just replacing, I decided to try using a split and join method to give it 
// a shot without using a for loop.

// a for loop I would have done like so:
// let results = ""
// for(let each = 0; each < address.length; each++){
//    if(address[each] === "."){
//       results = results + "[.]"
//    }else{
//    results = results + address[each]
//    }
// }

// To use split and join, I just split the string by each "." which should create
// an array of just integers, then I rejoin that array with "[.]" instead.

var defangIPaddr = function(address) {
    return address.split(".").join("[.]")
};