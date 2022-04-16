//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#name').innerText = data.name
        let string = ""
        data.subclasses.forEach( el => {
          let newLi = document.createElement('li')
          newLi.innerText = el.name
          document.querySelector('ul').appendChild(newLi)
        }
        )
        document.querySelector('#class').innerText = data.classes[0].name
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
