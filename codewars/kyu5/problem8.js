//Write something that solves for x in the case of easyCases

//First I'm looking at how to structure the information.
//I get an input of either:

//Number - ("1", "0", "4", etc)
//Character - ("+", "-". "=")

//Starting with eq.split("=")

function valueOfX(eq) {
  let split = eq.split("=")
  let x = 0;
  let variables = []
  for(let i = 0; i < 2; i++){
    variables.push(split[i].split(" ").filter(element => element !== ""))
  }
  return variables[1].reduce((prev, curr, index, array) => {
    if(prev === "+" || prev === "-"){
      return sum(array[index - 2], curr, prev)
    }
  })
}
let sum = (a, b, operator) => operator === "+"? a + b: a - b;
const easyCases = {
    'x + 1 = 9 - 2': 6,
    'x - 2 + 3 = 2': 1,
    'x = + 2 - 5 + 9': 6
}
for(each in Object.entries(easyCases)){
  console.log(valueOfX(Object.entries(easyCases)[each][0]))
}
