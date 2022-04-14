function getFetch(){
  const url = 'https://programming-quotes-api.herokuapp.com/quotes/random'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
				console.log(data.en, data.author)
				document.querySelector('#quote').innerText = `"${data.en}"`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
