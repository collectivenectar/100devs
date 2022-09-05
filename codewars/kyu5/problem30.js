// Parameters: Given a string representing a hexadecimal color
// Return: Return the string converted to the RGB format for colors, nested inside
// Notes: make it case insensitive.
// an object => {r: "", g: "", b: ""}
// Example: hexStringToRGB("#FF9933") => {r: 255, g: 153, b: 51}
// hexStringToRGB("#AAf222") => { r: 170, g: 242, b: 34 }

// Pseudocode:

// For starters create the object to store the eventual RGB key: value pairs
// Then create an array to store the hexadecimal values from 0-f
// Then loop through the string 2 characters at a time, skipping over 0 index
// For the first two, first find the index for the first character in the colors array,
// multiply by 16, and store in a variable first.
// For the second character, find the index in the colors array and store in another
// variable, second.
// Add the two variables together and store that value with the 'r' key in rgb.
// Repeat the same steps for the next two characters in the loop, but store to the 'g' key
// And again, but for the 'b' key.
// Return the rgb object

function hexStringToRGB(hexString) {
  let rgb = {}
  let colors = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
  for(let channel = 1; channel < hexString.length; channel = channel + 2){
    if(channel < 3){
      let first = colors.indexOf(hexString[channel].toLowerCase()) * 16
      let second = colors.indexOf(hexString[channel + 1].toLowerCase())
      rgb["r"] = first + second
    }else if(channel > 2 && channel < 5){
      let first = colors.indexOf(hexString[channel].toLowerCase()) * 16
      let second = colors.indexOf(hexString[channel + 1].toLowerCase())
      rgb["g"] = first + second
    }else{
      let first = colors.indexOf(hexString[channel].toLowerCase()) * 16
      let second = colors.indexOf(hexString[channel + 1].toLowerCase())
      rgb["b"] = first + second
    }
  }
  return rgb
}
