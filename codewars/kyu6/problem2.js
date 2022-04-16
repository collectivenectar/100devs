// a library keeps lists of inventory like:
//L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
//the first letter of each element in L represents the alphabetical category
//there is always a space after the alphabetical group in the string
//the number after the space is the quantity of the item in question
//given a listOfCat of (string)letters, return a list of the stock quantity (sum)
//of the items in L where the first letter in the L element is the same as
//the element in listOfCat
//the list result to return is formatted as:
//(A : 20) - (B : 114) - (C : 50) - (W : 0)

//In order to provide (listOfCat[i] : extract[listOfCat[i]]) for 0 inventory count
//items, I had to restructure the outer loop for search by given letters, then
//if none found, append key pair letter with 0 value

function stockList(listOfArt, listOfCat){
  let extract = {}
  for(let i = 0; i < listOfCat.length; i++){
    for(let j = 0; j < listOfArt.length; j++){
      if(listOfArt[j].split(" ")[0][0] === listOfCat[i]){
        if(extract[listOfCat[i]]){
          extract[listOfCat[i]] = Number(extract[listOfCat[i]]) + Number(listOfArt[j].split(" ")[1])
        }
        else{
          extract[listOfCat[i]] = Number(listOfArt[j].split(" ")[1])
        }
      }
    }
    if(extract[listOfCat[i]] === undefined){
      extract[listOfCat[i]] = 0
    }
  }
  let results = ""
  for(let i = 0; i < Object.keys(extract).length; i++){
    if(i === 0){
      results = results + `(${Object.keys(extract)[i]} : ${extract[Object.keys(extract)[i]]})`
    }
    else{
      results = results + ` - (${Object.keys(extract)[i]} : ${extract[Object.keys(extract)[i]]})`
    }
  }
  if(listOfArt == false){
    return ''
  }
  else{
    return results
  }
}

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]

console.log(stockList(b, c))
