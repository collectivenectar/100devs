// Club membership calculator, receives an array full of two element arrays -
// first element is age, second is their golf handicap
// Senior membership can only be for age >= 55 AND handicap > 7
// all else is Open membership

function openOrSenior(data){
  let memberships = []
  for(let i = 0; i < data.length; i++){
    if(data[i][0] >= 55 && data[i][1] > 7){
      memberships.push('Senior')
    }
    else{
      memberships.push('Open')
    }
  }
  return memberships
}
