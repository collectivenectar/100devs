
function loop(initial){
  for (let i=initial; i <=10; i++){
    if (i%2 ===0){
      console.log(`${i} is even`);
    }
    else{
      console.log(`${i} is odd`)
    }
  }
}
loop(3);
let input = prompt("Provide me with a number")
while (input < 50 || input > 100){
  input = prompt("Provide me with a number")
}

let input = prompt("Provide me with a number between 2 and 9");
while ((input <2) || (input > 9)){
  input = prompt("Provide me with a number between 2 and 9")
}
let table = [];
for (i=1; i<=9; i++){
  table.push(i * input)
}
console.log(table);

let input = prompt("enter some text");

while ((input != "yes") && (input != "no")){
  input = prompt("enter some text")
};
let numberArray = [];
for (i = 1; i <=100; i ++){
  if (i % 3 == 0){
    if (i % 5 == 0){
      numberArray.push("fizzbuzz")
    }
    else{
      numberArray.push("fizz");
    }
  }
  else if (i % 5 == 0){
    numberArray.push("buzz");
  }
  else{
    numberArray.push(i)
  }
}
console.log(numberArray)
