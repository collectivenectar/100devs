function getFetch(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#name').innerText = data.name
        document.querySelector('#latin-name').innerText = data.latin_name
        document.querySelector('#animal-photo').src = data.image_link
        document.querySelector('#story').innerText = `Somewhere near ${data.habitat}. Normally, they eat ${data.diet}, but in this case, they made an exception.`
        document.querySelector('#story-name').innerText = data.name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
