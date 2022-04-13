//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods


class NetflixTVShow {
  constructor(genre, title, rating, episodes){
    this.genre = genre
    this.rating = rating
    this.title = title
    this.episodes = episodes
  }
  play(){
    console.log("you are shown a flickering screen, and then, the movie begins to play")
  }
  stop(){
    console.log("the movie stops playing")
  }
  saveToList(){
    console.log("added to list")
  }
}

let bridgerton = new NetflixTVShow("period romantic drama", "bridgerton", "5 stars", 16)
console.log(bridgerton.title)
