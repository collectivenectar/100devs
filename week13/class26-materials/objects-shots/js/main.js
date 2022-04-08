//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

let getCocktail = document.querySelector('button')
getCocktail.addEventListener('click', displayCocktail)

function displayCocktail(){
  let fetchString = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${fetchString}`)
  .then(res => res.json())
  .then(data => {
    document.querySelector('img').src = data.drinks[0].strDrinkThumb
    document.querySelector('h2').innerText = data.drinks[0].strDrink
    document.querySelector('h3').innerText = data.drinks[0].strInstructions
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
}
