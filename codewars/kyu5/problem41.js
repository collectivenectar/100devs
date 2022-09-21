// Parameters: Given an array of various integers, negative and positive
// Return: Return the array converted to a tree structure,

// where a TreeNode = (value, left, right) => 
// this.value = value,
// this.left = left,
// this.right = right

// Example: arrayToTree([1, 2, 3, 4, 5, 6, 7, 8]) => 

//       1
//    2     3
//  4  5   6  7
// 8

// Pseudocode:
// Given that a tree is filled according to the oldest branch to the left with an available spot,
// I decided it would be better to just fill a variable with the available branches(nodes) that have
// a left or right available. I can do this just by pushing to an array a reference to the node 
// whenever I make one and don't set the left or right values. This way the oldest nodes are at 
// the beginning, and once I've filled a node I can shift() it off the top, much like a call stack.

// So first, check if the array has elements, if not - return undefined.
// Otherwise, create the root node 'tree', set it's value to the 0th index in the array,
// and then create the array to store the oldest available nodes in. - 'stack'

// Then, loop from 1 to the end of the array, moving 2 spots at a time
// For each loop, pop off the first node in the array 'stack', set the left
// value to a new treenode with the next array value in, and set the right
// to another new treenode with the next array value + 1 in it.
// Then push those two new tree nodes to the end of the 'stack' array.

// The only exception is if I reach the end of the loop on an odd set, in which case
// I need only to set the left value of the current oldest available node.


function TreeNode(value, left, right){
    this.value = value,
    this.left = left,
    this.right = right
}

function arrayToTree(array) {
    if(!array.length){
      return undefined
    }
    let tree = new TreeNode(array[0])
    let stack = [tree]
    for(let eachNode = 1; eachNode < array.length; eachNode = eachNode + 2){
      if(eachNode === array.length - 1){
        let node = stack.shift()
        node.left = new TreeNode(array[eachNode])
      }else{
        let node = stack.shift()
      node.left = new TreeNode(array[eachNode])
      node.right = new TreeNode(array[eachNode + 1])
      stack.push(node.left)
      stack.push(node.right)
      }
    }
    return tree
  };
  console.log(arrayToTree([1, 2, 3, 4, 5, 6, 7, 8]))