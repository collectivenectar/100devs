// Parameters: Given a sorted linked list
// Return: Return the linked list with all the duplicate value nodes removes
// Example: deleteDuplicates([1, 1, 2, 3]) => [1, 2, 3]
// deleteDuplicates([1, 1, 1, 1, 1, 1, 1]) => [1]
// deleteDuplicates([]) => null

// Pseudocode:

// First catch a null head, returning null if head is null.
// Otherwise, set a tempHold variable equal to the reference to the given head

// Then, begin a while loop, lasting as long as tempHold has a next value that isn't null

// Each time, if the value is equal to the nodes next.value, then remove the link by setting
// the current .next to the current .next nodes' .next value.

// Otherwise, just move down the list with setting tempHold to its own .next value
// At the end of the loop, return the same head!

var deleteDuplicates = function(head) {
    if(head === null){
        return null
    }
    let tempHold = head
    while(tempHold.next !== null){
        if(tempHold.val === tempHold.next.val){
            tempHold.next = tempHold.next.next
        }else{
            tempHold = tempHold.next
        }
    }
    return head
};