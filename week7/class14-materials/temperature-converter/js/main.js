//Write your pseduo code first!
const convertbutton = document.querySelector('.convert');
let fahrenheit = document.querySelector('#fahr');
let celsius = document.querySelector('#cels');

convertbutton.addEventListener('click', convert);
fahrenheit.addEventListener('click', clear);
celsius.addEventListener('click', clear);

function convert(){
  if (fahrenheit.value != ""){
    let newcels = (fahrenheit.value - 32) * (5 / 9)
    celsius.value = newcels;
  }
  else if (celsius.value != ""){
    let newfahr = (celsius.value * (9 / 5)) + 32;
    fahrenheit.value = newfahr;
  }
}

function clear(){
  fahrenheit.value = "";
  celsius.value = "";
}
