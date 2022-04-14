//given the length and width of a 'true' RECTANGLE, return the length || width of all the perfect squares
//produced starting with the largest possible square you can make from the length and width

//I started just with keeping track of the length and width separately in a var, decreasing them
//by the current width or length(whichever is smaller) until the two dimensions are equal. If they
//are equal, I have finished and can break from the loop.

function sqInRect(lng, wdth){
  let squares = []
  let length = 0 + lng
  let width = 0 + wdth
  for(let i = 0; i < lng * wdth; i++){
    if(length > width){
      length = length - width
      squares.push(width)
    }
    else if(length < width){
      width = width - length
      squares.push(length)
    }
    else{
      squares.push(length)
      break
    }
  }
  if(lng === wdth){
    return null
    }
  else{
    return squares.length > 0? squares: null;
  }
}
