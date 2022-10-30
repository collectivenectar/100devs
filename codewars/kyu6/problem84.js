// Parameters:
// Given a Binary Tree => [], [1], [1, 2, 3, null, null, 4, 5]

// Return:

// Return the minimum depth of the tree to the closest leaf node

// Examples:

// [] => null
// [1] => 1
// [1, 2, 3, null, null, 4, 5] => 2

// Pseudocode:

// First things first is this is a recursive solution, so I start off by first
// checking if the given root(Binary Tree) is null
// If so I return null.

// Then I check if the current root/head that I have been passed has
// BOTH a left and right value of null. If so, return 1 (I need to keep count,
// not return the tree itself)

// Otherwise, I have some recursing to do, I need to check if there is a left
// but no right, or a right with no left, or if both branches have a node to 
// link to. For each case, I just return some version of:

// return the value 1, PLUS return of the function itself after calling it
// while passing in the current root/head .left or .right (or both)

// If both branches have a node to link to, compare which branch has a lower
// value, and return that value.

// Recursively this isn't that efficient in terms of mem or space, but I wanted
// to find a recursive solution just to see if it was doable.

var minDepth = function(root) {
    if(root === null){
        return null
    }
    if(root.left === null && root.right === null){
        return 1
    }else{
        if(root.left === null){
            return 1 + minDepth(root.right)
        }else if(root.right === null){
            return 1 + minDepth(root.left)
        }else{
            if(minDepth(root.right) < minDepth(root.left)){
                return 1 + minDepth(root.right)
            }else{
                return 1 + minDepth(root.left)
            }
        }
    }
};

function Node(val, left, right){
    this.val = (val === undefined ? 0: val)
    this.left = (left === undefined ? null: left)
    this.right = (right === undefined ? null: right)
} 

let createTree = (list, head) => {
    if(!list.length){
        return head
    }else{
        head.val = list.unshift()
        
    }
}

let test1 = createTree([], new Node())
let test2 = createTree([1], new Node())
let test3 = createTree([1, 2, 3, null, null, 4, 5], new Node())

console.log(minDepth(test1) === null)
console.log(minDepth(test2) === 1)
console.log(minDepth(test3)) === 2)
