// Parameters: given two arrays, g and s. S is an array of cookies, where the element value representss
// the cookie size, and G is an array of children, where the element value represents the
// minimum size of cookie the child will be satisfied by, i.e. the greed level.

// Return: Return the maximum number of children that will be satisfied by the cookies
// present in s

// Examples:
// findContentChildren([3, 2, 1], [1, 1]) => 1
// findContentChildren([3, 2, 1], [3, 2]) => 2
// findContentChildren([4, 6, 3, 1, 7], [2, 5, 5, 8]) => 4
// findContentChildren([2, 3, 4], []) => 0

// Pseudocode: 
// So, first things first, the best solution to start with involves sorting both arrays.
// If I don't sort them, I'll mismatch greed size to cookie size early on and that
// would be a greedy algorithm.
// So, sort both arrays, in ascending order. Then, check that both arrays are not empty
// Then create space for a variable 'children' which counts the number of satisfied children.
// Then, begin a while loop. While the sorted array of children is not empty,
// do the following:
// Check that the cookies array hasn't become empty(for after the first loop)
// Check if the last element in the children array is larger then the last element in
// the cookies array. If so, remove the last element in the children array to see if
// the next child can be satisfied by the last element in the cookies array.
// If the child element is NOT larger than the cookies element, pop() both elements
// off of both arrays, and increment the children variable up one.
// After all the elements have been popped out of the sorted children array,
// return the variable value in children.

var findContentChildren = function(g, s) {
    let sortedG = g.sort((a, b) => a - b)
    let sortedS = s.sort((a, b) => a - b)
    let children = 0
    if(!g.length || !s.length){
        return 0
    }
    while(sortedG.length > 0){
        if(!sortedS.length){
            break
        }
        if(sortedG[sortedG.length - 1] > sortedS[sortedS.length - 1]){
            sortedG.pop()
        }else{
            sortedG.pop()
            sortedS.pop()
            children++
        }

    }
    return children
};