// create a User class to manage codewars style ranking system
// Parameters = given ranks from -8 to 8, not inclusive of 0, each problem will
// be passed simply as problem rank. Provide getter for rank and current _progress
// points. User starts at rank -8, progress points = 0

// return the appropriate rank, progress points, or add progress points based on
// the difference between the user level and problem level -- or throw an error
// if the problem level provided is invalid. If problem is higher, progress points
// are equal to 10 * (level difference squared). If same, 3 points, if 1 lower, 1.
// otherwise ignore problem.

// Example - given incProgress(100), rank should go up 1., given incProgress(101)
// return rank 1, progress 1. Given incProgress(402), rank up 4, progress 2.

// Pseudocode:

// constructor with props rank, progress, and an array to store the [-8, -1], [1, 8]
// rank names.
// create a method to check the current level, progress amount, and update based
// on the rules given.
// create another method to check the problem level and determing the amount of
// points to award for solving the problem. 

class User {
  constructor(_rank, _progress, ranks) {
    this._rank = 0;
    this._progress = 0;
    this.ranks = [-8, -7, -6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8];
  }
  updateProgress(progress) {
    let sumProgress = progress + this._progress
    if(this._rank < 15){
      if(sumProgress % 100 < sumProgress){
        this._rank = this._rank + (Math.floor(sumProgress / 100))
        if(this._rank === 15){
          this._progress = 0
        }
        else{
          this._progress = sumProgress % 100
        }
      }
      else{
        this._progress = sumProgress
      }
    }
    else{
      this._progress = 0
    }
  }
  incProgress(activityRank){
    if(!this.ranks.includes(activityRank)){
      throw 'Error'
    }
    let actRankIndex = this.ranks.indexOf(activityRank)
    if(actRankIndex > this._rank){
      this.updateProgress(10 * ((actRankIndex - this._rank) ** 2))
    }
    else if(actRankIndex === this._rank){
      this.updateProgress(3)
    }
    else{
      if(actRankIndex === this._rank - 1){
        this.updateProgress(1)
      }
    }
  }
  get progress(){
    return this._progress
  }
  get rank(){
    return this.ranks[this._rank]
  }
}
