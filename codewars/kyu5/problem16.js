// Parameters: Given 2 linked lists, each a 'Listnode' with a .next property and a .val property
// val will only ever be an integer from 0 to 9, but the linked lists themselves
// are can result in very large series of numbers
// Return: Derive the values from each linked list as if each link value is a digit of
// one number, sorted in reverse. Sum the two lists numbers together. Then return
// that sum as a linked list as well - where each link value is one of its digits.

// Example:

// given l1 = [3, 6, 7] (the number is 763)
// and l2 = [4, 1, 7] (the number is 714)
// return [7, 7, 4, 1] (the result is 763 + 714 = 1477)

// Pseudocode:

// starting with a nested arrow function to iterate over the list and pull the
// link.val property from each node, push each number into an array and return the
// final array.

// Then, call the sum() function on each list, then converting the returned arrays
// into a string, then do some funny string magic stuff to sum the two numbers
// together without adding the entire numbers(this is to fix large numbers from
// returning 1932425533300e20 etc). To do this, I add 0s to the beginning of the
// shorter number string (of the two) and then one by one (like decimal points) add their
// sum to a new string variable. If the sum of the two digits results in something
// above 9, I add a carryover digit of 1 to add to the next decimal place, and if
// this happens on the last decimal place, I add an extra 1 to the beginning
// of the number. This is all returned as a string instead of a number.

// Then, I take the summed number string, and create a new linked list using those
// numbers. With linked lists you have to start with the last item since you need
// the next link to exist before setting the next property of any link.

// Its a reverse loop for the rules ( must be in reverse golf )

// Then I return the result.

var addTwoNumbers = function(l1, l2) {
    // nested function for getting list values as an array of numbers
    let sum = (list) => {
        let head = list
        let nums = [head.val]
        while(head.next !== null){
            let next = head.next
            nums.unshift(next.val)
            head = head.next
        }
        return nums
    }
    // added complexity, but it's for adding large numbers in Javascript
    let s1 = sum(l1).join("")
    let s2 = sum(l2).join("")
    let sumLists = ""
    let lengthDiff = s1.length > s2.length? [s1.length - s2.length, s2, s1]: [s2.length - s1.length, s1, s2]
    for(let start = 0; start < lengthDiff[0]; start++){
    lengthDiff[1] = "0" + lengthDiff[1]
    }
    let carryOver = 0
    for(let num = lengthDiff[1].length - 1; num >= 0; num--){
    let newSum = Number(lengthDiff[1][num]) + Number(lengthDiff[2][num]) + carryOver
    carryOver = 0
    if(newSum > 9){
        sumLists = (newSum - 10) + sumLists
        carryOver = 1
        if(num === 0){
            sumLists = 1 + sumLists
        }
    }
    else{
        sumLists = newSum + sumLists
        carryOver = 0
    }
    }
    // for creating the linked list to return
    class Listnode {
        constructor(val){
            this.val = val === undefined ? 0 : val;
            this.next = null;
        }
    }
    // turning the string into a linked list
    let results
    let tracker = 0
    while(tracker < sumLists.length){
        let newLink = new Listnode(sumLists[tracker])
        if(tracker > 0){
            newLink.next = results
        }
        results = newLink
        tracker++
    }
    return results
};
