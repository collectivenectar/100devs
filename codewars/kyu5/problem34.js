// Parameters: Given an array of weather for each 12 hour period for a certain number of days.
// Return: Return how many umbrellas you need to start with at home, given that you only bring
// an umbrella if it's actively raining when you're about to leave for work.
// You can leave an umbrella at home, or leave one at work but only if you won't need it.
// Obviously in reality you wouldn't know ahead of time, but just calculate it as if
// it were a weather forecast. Weather that requires an umbrella is either 'rainy',
// or 'thunderstorms'.

// Example:
// minUmbrellas(["sunny", "windy", "sunny", "clear"]) => 0 (no bad weather)
// minUmbrellas(["rainy", "rainy", "rainy", "rainy", "thunderstorms", "rainy"]) => 1
// minUmbrellas(["clear", "rainy", "clear", "rainy", "rainy", "clear"]) => 2

// Pseudocode:

// Create a var to add a starting umbrella 'toStartWith'
// create two array variables to store umbrellas in at work or at home
// first catch if the weather array is less than 2, return 0 if so
// otherwise create an array to store the strings to match for bad weather.
// Then loop through, first breaking the weather into days by dividing it in half,
// then nesting another loop inside it with a length of 2 to represent 12 hour periods.
// Then create 2 logic paths:
// If it's the morning and it's bad weather,
// and then if it's the evening and it's bad weather.

// For each path, depending on if the array has an umbrella stored at that location,
// add one to toStartWith and add an umbrella to the next location, or just move an
// 'umbrella' from work to home, or from home to work.

// Then, return the final value of toStartWith.

function minUmbrellas(weather) {
  let toStartWith = 0
  let work = []
  let home = []
  if(weather.length < 2){
    return 0
  }
  let umbrellaWeather = ["rainy", "thunderstorms"]
  for(let day = 0; day < weather.length / 2; day++){
    for(let halfDay = 0; halfDay < 2; halfDay++){
      let badWeather = umbrellaWeather.includes(weather[day * 2 + halfDay])
      if(halfDay === 0 && badWeather){
        if(!home.length){
          toStartWith++
          work.push(0)
        }else{
          home.pop()
          work.push(0)
        }
      }else if(halfDay === 1 && badWeather){
        if(!work.length){
          toStartWith++
          home.push(0)
        }else{
          work.pop()
          home.push(0)
        }
      }
    }
  }
  return toStartWith
}
console.log(minUmbrellas(["clear", "rainy", "clear", "rainy", "rainy", "clear"]))
