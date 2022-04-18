//adding matrices of equal n dimensions, provide the sum(translation)

function matrixAddition(a, b){
  let newMatrix = []
  for(let i = 0; i < a.length; i++){
    newMatrix.push([])
    for(let j = 0; j < a[i].length; j++){
      newMatrix[i].push(a[i][j] + b[i][j])
    }
  }
  return newMatrix
}
