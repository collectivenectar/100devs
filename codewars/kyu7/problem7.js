// Given an array of numbers of odd length with only two different possible numbers as elements.
// One element only appears once in the array.
// return the value of that element.

// filter the numbers by eliminating anything equals the first element value.
// then by filtering for that element, you get your hands on a and b.
// if the array returned by numbers.filter() is longer than the other, then
// the other one is the one that only happens once.

function stray(numbers) {
  let a = numbers.filter(x => x !== numbers[0])
  let b = numbers.filter(x => x !== a[0])
  return a.length < b.length ? a[0]: b[0];
}
console.log(stray([17, 17, 17, 5, 17, 17, 17, 17, 17, 17, 17]))
