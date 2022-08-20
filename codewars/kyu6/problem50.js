// Parameters: Given a string, representing by characters a linked list, like
// "1 -> 2 -> 1 -> null" where the integers represent the .data property of each
// node, and the '->' represents the link from one node to the next node.
// Return: Return a linked list using the pattern given in the string.
// Example: parse("1 -> 2 -> 3 -> null") => new Node(1, new Node(2, new Node(3))))

// Pseudocode:

// first split the string according to the pattern " -> " which should return an
// array of elements where each element is an integer, except for the last element
// which should be 'null'

// Then create a tracker variable to store a number starting from 0. This is for
// going through the array one at a time and creating nodes in the while loop later.

// Then create the root node for the list, passing in the first element in the array
// as a number for the .value argument of the Node() class.

// Then create a 'temp' variable to store each link temporarily in while I work on it
// during the while loop

// then just in case the string is just 'null', return null

// Otherwise, increment the tracker up one, and start the while loop. As long as
// the element at the index present in tracker is not equal to 'null', then it
// should continue passing in new nodes.

// inside the while loop:

// create a new Node(), passing in the next element in the array as a Number.
// store that new Node as the .next property of the node referenced by the temp variable.
// then set the temp variable equal to the .next property, moving down the linked list.
// then increment the tracker variable up one more.

function parse(string) {
  let listElements = string.split(" -> ")
  let tracker = 0
  let newList = new Node(Number(listElements[tracker]))
  let temp = newList
  if(string === "null"){
    return null
  }else{
    tracker++
    while(listElements[tracker] !== "null"){
      let newLink = new Node(Number(listElements[tracker]))
      temp.next = newLink
      temp = temp.next
      tracker++
    }
  }

  return newList
}
