// Parameters: Given two arrays, each filled with names of restaurants
// Return: Find all the intersections between the two arrays, and determine which of the intersections have the
// lowest index sum - i.e. if restaurant A is in array 1 and array 2, sum the index of restaurant A in array 1
// to the index of restaurant A in array 2. Return the name/s of the restaurants in an array.
// Examples:

// findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]) => ["Shogun"]
// findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"]) => ["Shogun"]
// findRestaurant(["happy","sad","good"], ["sad","happy","good"]) => ["sad","happy"]

// Pseudocode:

// first, find the intersections between the lists. 
// I start with the first list,
// I do this by creating a JS object where each key is the common element value,
// and each value is the index where the element was found.

// Then, I go through the second list. If I find that the map for the first list contains an
// element in the second list, I sum the values of the indices in the 1st and 2nd lists, and
// store the result in another JS object 'sums' where I place the element value along with the
// sum, where the sum is the key (a number) and the intersecting values (a string) are placed in
// an array, since I can have more than one minimum sum. If I find more than one, I just push it
// into the array.

// Finally, I export an array from the object and sort it, giving the lowest key, and then
// use the lowest value key to return however many intersections there are.

var findRestaurant = function(list1, list2) {
    let l1 = {}
    let sums = {}
    // find array intersections, and count the sum of the indices
    for(let each = 0; each < list1.length; each++){
        if(!l1[list1[each]]){
            l1[list1[each]] = each
        }
    }
    for(let check = 0; check < list2.length; check++){
        if(!isNaN(l1[list2[check]])){
            if(!sums[l1[list2[check]] + check]){
                sums[l1[list2[check]] + check] = [list2[check]]
            }else{
                sums[l1[list2[check]] + check].push(list2[check])
            }
        }
    }
    return sums[Object.keys(sums).sort((a, b) => a - b)[0]]
};