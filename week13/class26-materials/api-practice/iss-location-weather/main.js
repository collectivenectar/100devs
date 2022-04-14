const newCoords = {}

function getFetchISS(){
  const url = 'http://api.open-notify.org/iss-now.json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        getFetchCity(data)
        getFetchWeather(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetchISS()
function getFetchCity(coordinates){
  const key = 'TG9JAXHGPNQWPHY14MIOPK9WLLPORVPX'
  let lat = Float.parseFloat(coordinates.iss_position.latitude)
  let lng = Float.parseFloat(coordinates.iss_position.longitude)
  const url = `http://api.geodatasource.com/v2/city?key=${key}lat=${lat}lng=${lng}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.city, data.region)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
function getFetchWeather(coordinates){
  const url = `https://api.open-meteo.com/v1/forecast?${coordinates.iss_position.latitude}&${coordinates.iss_position.longitude}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//could look at tracking the movement of the iss and comparing it to it's previous paths,
//see if theres a way to save previous days information and present it visually


// RETURNS THIS OBJECT
// {
//   "message": "success",
//   "timestamp": UNIX_TIME_STAMP,
//   "iss_position": {
//     "latitude": CURRENT_LATITUDE,
//     "longitude": CURRENT_LONGITUDE
//   }
// }

//theres also this but it looks meaty for gps data, needs parsing and formatting
//http://www.celestrak.com/NORAD/elements/gp.php?GROUP=starlink&FORMAT=tle
