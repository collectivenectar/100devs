// Parameters: Given an array of integers, each int representing a possible wall
// of a bucket.

// Return: Of all possible walls, which two walls will hold the most volume of
// water? return the volume.

// Example: maxArea([1, 2, 3, 2, 10, 1, 14, 6, 9]) => 36

// Pseudocode:

// tried it with for loops but ran into issues making changes to the boundaries of
// the loop while it was running. With a while loop, works perfectly.
// First, create a var to store the best volume found so far.
// Then create a var to store the starting point of the loop, and one for thelse
// end point as well.
// while the starting point is less then the end point, execute the following:
// calculate the maximum of two numbers, the current best volume value, against
// the current two wall volume calculation.
// If the wall on the left is small than the one on the right, then move the left
// boundary up one. There's no point in continuing to search best volumes with this
// left boundary if it's smaller, since decreasing distance any more will not help
// increase total area. The same goes for if the right side is smaller. Move the
// right side left one if it's smaller.

// After the loop is over, return the best volume found.

var maxArea = function(height) {
    let areas = 0
    let start = 0
    let end = height.length - 1
    while(start < end){
      areas = Math.max(areas, Math.min(height[start], height[end]) * Math.abs(start - end))
      if(height[start] <= height[end]){
        start++
      }
      else{
        end--
      }
    }
    return areas
};

console.log(maxArea([1, 2, 3, 2, 10, 1, 14, 6, 9]))
