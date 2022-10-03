// Parameters: Given a url
// Return: return the url with everything after the anchor "#" removed
// Example: removeUrlAnchor("homestarrunner.com/toons#Puppet%20Stuff") => "homestarrunner.com/toons"
// Pseudocode:

// using split, pass in the "#" sign as the parameter, which returns an array of two strings with
// the non-anchored url as the first element.
// Return the first element in the array

function removeUrlAnchor(url){
    return url.split("#")[0]
  }