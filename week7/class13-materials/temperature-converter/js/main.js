//Write your pseduo code first!
//store the celsius value
//multiply it by 9/5
//add 32
//display new value

document.querySelector('#calculate').addEventListener('click', calculate);

function calculate(){
  const newcelsius = document.querySelector('#newcelsius').value;
  let newfahrenheit = newcelsius * (9 / 5) + 32;
  document.querySelector('#answer').innerText = newfahrenheit;
}
