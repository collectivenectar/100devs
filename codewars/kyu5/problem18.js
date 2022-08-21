// Parameters: Given a linked list, and 'n' a value representing the link counting
// back FROM the end that is to be removed.
// Return: Return the linked list with the link at n FROM the end removed.
// Example:

// removeNthFromEnd([1, 2, 3, 4, 5], 2) => [1, 2, 3, 5]
// removeNthFromEnd([1], 1) => []

// Pseudocode:

// Since n is from the end, I first need to count the length of the list, subtract
// n from that value, and set a variable equal to that value, nFromStart
// Then create a tracker variable to count which link I'm at in the list
// Then, create a while loop that moves through the linked list one at a time
// until the tracker variable is equal to the nFromStart value - 1.
// -1 because I need to modify the link before it, not nFromStart itself.
// I set the .next value of the one before it to the value of .next.next, thereby
// removing the reference to the link at nFromStart, and at the same time linking
// the previous one to skip to the one after.

// The rest of the logic is just for edge cases, based on the length of the list
// and the value of n itself.

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function(head, n) {
     let countLength = () => {
         let counter = 1
         let temp = head
         while(temp.next !== null){
             temp = temp.next
             counter++
         }
         return counter
     }
  let counter = 1
  let nFromStart = countLength() - n + 1
  let temp = head
  while(counter <= nFromStart){
    if(n === 1 && countLength() === 1){
      return null
    }else if(countLength() === 2){
       if(n === 2){
           return head.next
       }else{
           head.next = null
           return head
       }
    }else{
        if(n === countLength()){
            return head.next
        }
      if(counter === nFromStart - 1){
        temp.next = temp.next.next
        return head
      }else{
        temp = temp.next
        counter++
      }
    }
  }
     return head
};

let head = new ListNode(1, null)
let temp = head
for(let link = 2; link <= 5; link++){
  let next = new ListNode(link, null)
  temp.next = next
  temp = next
}
console.log(head)
console.log(removeNthFromEnd(head, 4))
