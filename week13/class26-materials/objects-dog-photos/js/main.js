//Get a dog photo from the dog.ceo api and place the photo in the DOM

let dogPhotoFrame = document.querySelector('img')

fetch("https://dog.ceo/api/breeds/image/random")
  .then(res => res.json())
  .then(data => {
    dogPhotoFrame.src = data.message
  })
  .catch(err => {
  })
