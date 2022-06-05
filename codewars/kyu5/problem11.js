// Parameters: given (r, g, b) values which are any integer, negative or positive
// Return the hexadecimal version of this RGB code.
// Example: given (0, 0, 0) => "000000", given (164, 1, 63) => A4013F
// PseudoCode:

// After research, RGB is a two step process,
// first by dividing by 16, removing any fraction left over => returns the first hex char index
// second by modulo 16, => returns the second hex char index
// storing an array of the hex series(0-9+A-F) and then use the indexes to string
// together the complete 6 digits.
// Everything else in this problem is just about clamping the inputs to the range
// [0, 255]


function rgb(r, g, b){
  let rgbArray = [r, g, b]
  let fixedRGB = []
  let firstH = (RGBSlot) => { return Math.floor(fixedRGB[RGBSlot] / 16) }
  let secondH = (RGBSlot) => { return fixedRGB[RGBSlot] % 16 }
  for(let rgbColor = 0; rgbColor < rgbArray.length; rgbColor++){
    if(rgbArray[rgbColor] < 0){
      fixedRGB.push(0)
    }
    else if(rgbArray[rgbColor] > 255){
      fixedRGB.push(255)
    }
    else{
      fixedRGB.push(rgbArray[rgbColor])
    }
  }
  let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
  let red = [firstH(0), secondH(0)]
  let green = [firstH(1), secondH(1)]
  let blue = [firstH(2), secondH(2)]
  return `${hex[red[0]]}${hex[red[1]]}${hex[green[0]]}${hex[green[1]]}${hex[blue[0]]}${hex[blue[1]]}`
}
console.log(rgb(164, 1, 63))
