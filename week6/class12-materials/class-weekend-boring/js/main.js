document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase();

  //Conditionals go here
  if (day==="saturday" || day==="sunday"){
    document.querySelector('#placeToSee').innerHTML = "It's the weekend";
  }
  else if (day==="tuesday" || day==="thursday"){
    document.querySelector('#placeToSee').innerHTML = "It's class day!";
  }
  else{
    document.querySelector('#placeToSee').innerHTML = "Booooringgggg!";
  }
//check for case insensitive matches, and show results in the dom somewhere instead of using alert('etc')
}
