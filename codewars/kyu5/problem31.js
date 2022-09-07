// Parameters: Given an array of items, and an integer representing the number of
// items per page required.
// Return: Create some methods for the PaginationHelper helper
// 1) itemCount() => returns the number of items in the collection(total)
// 2) pageCount() => returns the number of pages after collection is 'paginated'
// 3) pageItemCount(pageNum) => returns the number of items on a given page in the collection
// 4) pageIndex(itemIndex) => returns the page that an item in the collection is on
// NOTE: this is 0 based indexing, and for the last two methods anything outside
// the index should return -1

// Example:
// let testCollection = new PaginationHelper([0, 1, 2, 3, 4, 5, 6, 7, 8], 3)
// testCollection.itemCount() => 9
// testCollection.pageCount() => 2
// testCollection.pageItemCount(1) => 3
// testCollection.pageIndex(7) => 2

// Pseudocode:
// For the main class, just use the this keyword to store values in the instance
// Then, for the helpers:
// 1)
// reference the instance with this and return the collection length for the item count
// 2)
// reference the instance with this and using math.ceil return the next int above
// what you get when you divide the collection.length by the items per page.
// 3)
// Calculate the total pages again and this time store it in a var
// Then compare it to the given page number - if it's outside of the range, return -1
// Otherwise, if the page number isn't the last page, just return the itemsPerPage given,
// or return the collection.length modulo itemsperpage
// 4)
// For return the page number the item is on, just use math.floor to get the next
// lowest int below what you get when you divide the item index by the given items
// per page


function PaginationHelper(collection, itemsPerPage){
  this.collection = collection,
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return this.collection.length
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage)
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  let totalPages = Math.ceil(this.collection.length / this.itemsPerPage) - 1
  if(pageIndex < 0 || pageIndex > totalPages){
    return -1
  }else{
    return pageIndex < totalPages ? this.itemsPerPage: this.collection.length % this.itemsPerPage;
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  if(itemIndex > this.collection.length || itemIndex < 0 || !this.collection.length){
    return -1
  }else{
    return Math.floor(itemIndex / this.itemsPerPage)
  }
}

let test = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)
console.log(test.itemCount())
