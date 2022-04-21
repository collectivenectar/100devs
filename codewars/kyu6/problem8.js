function dataReverse(data) {
  let segments = []
  for(let i = 0; i < data.length / 8; i++){
    segments.push(data.slice(i * 8, i * 8 + 8))
  }
  let reversed = segments.reverse()
  return reversed.join(",").split(",").map(element => Number(element))
}


let data1 = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
console.log(dataReverse(data1))
