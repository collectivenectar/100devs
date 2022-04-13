function getFetch(){
  const url = 'https://zoo-animal-api.herokuapp.com/animals/rand'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#name').innerText = data.name
        document.querySelector('#latin-name').innerText = data.latin_name
        document.querySelector('#habitat').innerText = data.habitat
        document.querySelector('#diet').innerText = data.diet
        document.querySelector('#lengthmin').innerText = data.length_min
        document.querySelector('#lengthmax').innerText = data.length_max
        document.querySelector('#weightmin').innerText = data.weight_min
        document.querySelector('#weightmax').innerText = data.weight_max
        document.querySelector('#animal-photo').src = data.image_link

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
