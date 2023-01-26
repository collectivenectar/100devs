// Parameters: Given an array representing a flowerbed, with flowers === 1, and empty spots === 0, AND a number of flowers to plant
// Return: Based on the rule that no flower can be planted adjacent to another flower, return
// whether or not you can place the number of flowers given in the flowerbed.
// Examples:

// canPlaceFlower([1,0,0,0,1], 1) => true
// canPlaceFlower([1,0,0,0,1], 2) => false
// canPlaceFlower([1,0,0,0,0,0,1], 3) => false
// canPlaceFlower([1,0,0,0,0,0,0,1], 3) => false

// Pseudocode:

// Setting up with three variables first : 

// The number of places available to place flowers (the results)
// the current position in the array (for the while loop)
// the length of the flowerbed array (to prevent accessing the property repeatedly)
// 
// begin a while loop, with the condition that I've not found enough places,
// AND that I've not finished looping through the array. This prevents waste.
// Inside the loop,
// check if the current value in the array is 0 (available)
// check for the beginning and end elements logic (end pieces require less empty spaces)
// if not a beginning or end piece, look back one and ahead one to see if the elements are 0s,
// and if so, place a 1 at the current spot in the array (mutating the array).

// every time I place a 1, I add 1 to the 'places' variable.

// at the end of the loop, return if places is greater than or equal to n -- which
// given the logic it should never be greater than n.

var canPlaceFlowers = function(flowerbed, n) {
    let places = 0
    let current = 0
    let length = flowerbed.length
    while(places < n && current < length){
        if(flowerbed[current] === 0){
            if(current > 0){
                if(flowerbed.length > (current + 1)){
                    if(flowerbed[current - 1] === 0 && flowerbed[current + 1] === 0){
                        flowerbed[current] = 1
                        places++
                    }
                }else{
                    if(flowerbed[current - 1] === 0){
                        places++
                    }
                }
            }else{
                if(flowerbed.length > 1){
                    if(flowerbed[1] === 0){
                        flowerbed[0] = 1
                        places++
                    }
                }else{
                    places++
                }
            }
        }
        current++
    }
    return places >= n
};