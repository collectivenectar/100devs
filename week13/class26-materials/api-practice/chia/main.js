function getFetch(){
  const url = 'http://api.open-notify.org/iss-now.json'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.iss_position)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
getFetch()
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
