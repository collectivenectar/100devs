// Parameters: Given a number, could be a floating point or integer
// Return: Return the closest multiple of 10, rounding up from 5, rounding down from
// 4.9etc
// Example: closestMultiple10(23) => 20
// Pseudocode:

// Divide num by 10, and use Math.floor to calculate the multiplier.
// Then multiply that number by 10 to get the multiple of 10 below num, and subtract
// that number from num. If the differences is less than 5, return the lower number,
// if 5 or more, return the one above it.

const closestMultiple10 = num => {
  return num - Math.floor(num / 10) * 10 < 5? Math.floor(num / 10) * 10: Math.ceil(num / 10) * 10;
};
