//Create an array of movie titles. Loop through the array and each element to the h2.
let movies = ["The Royal Tenenbaums", "Bottle Rockets", "The Grand Budapest Hotel", "Moonrise Kingdom", "Fantastic Mr. Fox"]
for(let i = 0; i < movies.length; i++){
  document.querySelector('h2').innerText += movies[i];
}
//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let numbers = [5, 1, 77, 2, 94, 45]
numbers.forEach((item, idx) => {numbers[idx] = item + 3})
//Find the average of all the numbers from question three
let total = 0;
for(let i = 0; i < numbers.length; i++){
  total += numbers[i]
}
total /= numbers.length - 1
