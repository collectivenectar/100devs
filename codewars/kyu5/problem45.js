// Parameters: Given two sorted linked lists - sorted in ascending values

// Return: Return a linked list that merges the two lists in ascending order.

// Example: 
// mergeTwoLists([1, 3, 6, 7], [1, 2, 3, 4, 5]) => [1, 1, 2, 3, 3, 4, 5, 6, 7]
// mergeTwoLists([], []) => []
// mergeTwoLists([1], []) => [1]
// mergeTwoLists([1],[2]) => [1, 2]

// Pseudocode:

// First, create a new linked list as a head to return as results
// Then, create three variables, all will be temporary variables to move along the list with.
// Then, first check if both the given lists are null - return null if so.

// Then, begin a while loop, checking each time that the two temp holders are not equal to null
// I also set up a variable just to avoid setting the results head to one of the given lists
// outside of the while loop. It's called firstNodeCreated.
// Then, I check that variable, set up the first list head if it's false, or
// begin comparing the linked list values.

// Depending on the .val of either list1 or list2, I :
// Create a new node with the first ones .val value
// Set the results list .next to the new node
// Set both the temp holders for the results list and the given first list UP to that holders .next value
// Everything else logic wise is just to check if either one of the lists is null so I don't get an error.



var mergeTwoLists = function(list1, list2) {
    let sorted = new ListNode()
    let firstNodeCreated = false
    let current = sorted
    let current1 = list1
    let current2 = list2
    if(!list1 && !list2){
        return null
    }
    while(String(current1) + String(current2) !== "nullnull"){
        if(!firstNodeCreated){
            if(current1 === null && current2 !== null){
                current.val = current2.val
                current2 = current2.next
            }else if(current2 === null && current1 !== null){
                current.val = current1.val
                current1 = current1.next
            }else{
                if(current1.val <= current2.val){
                    current.val = current1.val
                    current1 = current1.next
                }else{
                    current.val = current2.val
                    current2 = current2.next
                }
            }
            firstNodeCreated = true
        }
        if(current1 !== null && current2 === null){
            let newLink = new ListNode(current1.val, undefined)
            current.next = newLink
            current = current.next
            current1 = current1.next
        }else if(current2 !== null && current1 === null){
            let newLink = new ListNode(current2.val, undefined)
            current.next = newLink
            current = current.next
            current2 = current2.next
        }else{
            if(current1 === null && current2 === null){
                continue
            }
            if(current1.val <= current2.val){
                let newLink = new ListNode(current1.val, undefined)
                current.next = newLink
                current = current.next
                current1 = current1.next
            }else{
                let newLink = new ListNode(current2.val, undefined)
                current.next = newLink
                current = current.next
                current2 = current2.next
            }
        }
    }
    return sorted
};