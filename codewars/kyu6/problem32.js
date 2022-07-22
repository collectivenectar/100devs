// Parameters: Given a linked list, where there each node also has a data key
// storing an integer.
// Return: Provide two functions: length(list) and count(list, integer)
// where count returns the length of the linked list, and count returns
// the occurrences of a specific integer in the linked list.
// Examples:
// length(null) => 0
// length(new Node(99)) => 1
// count(new Node(99), 99) => 1
// Pseudocode:

// for linked lists, it needs to be navigated the same way as deeply nested objects,
// so for length(), I need a counter and a mutable var to move down the list.
// starting with a check if the first object is null
// then otherwise start the counter at 0
// set a temp var to reference the current head
// start a while loop to go until the current head is null
// inside the loop, count up 1 each time, and set the temp var to the
// linked .next property of the current head
// Once the while loop is over, return the counter value.

// for count(), do the same thing, except create a map(an object) to count occurrences
// of the numbers inside the data property. Return a ternary in case there are
// no occurrences of the given integer to look for, and otherwise return the count.

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  if(head == null){
    return 0
  }
  else{
    let counter = 0
    let temp = head
    while(temp != null){
      counter++
      temp = temp.next
    }
    return counter
  }
}

function count(head, data) {
  let integers = {}
  let counter = 0
  let temp = head
  while(temp != null){
    if(integers[temp.data]){
      integers[temp.data] = integers[temp.data] + 1
    }
    else{
      integers[temp.data] = 1
    }
    temp = temp.next
  }
  return !integers[data]? 0: integers[data];
}
