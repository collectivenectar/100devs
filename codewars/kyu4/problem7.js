// Parameters : Given integer representing seconds
// Return : human readable duration format => `_ years, _ days, _ hours, _ minutes, and _ seconds`
// Example : formatDuratoin(1660) => `27 minutes and 40 seconds`, formatDuration(60) => 1 minute
// Pseudocode :
// set up a holder for string constants("year", "day", etc)
// set up a helper for converting seconds to various formats
// create an object to keep component type and component count if greater than 0
// fill it with given component counts
// create an array to store individual components converted to strings
// set up template literals for commas, ands, and plural counts
// use logic for duration components counts to determine string generation
// if count is 1, just add string, if 2, add "and"
// if count is more than 2, add commas and "and"
// return the array joined with spaces between.

function formatDuration (seconds) {
  let durationComponents = ["year", "day", "hour", "minute", "second"]
  let formatComponent = (seconds, component) => {
    switch(component){
        case 0:
        return Math.floor(seconds * ((1 / 60) * (1 / 60) * (1 / 24) * (1 / 365)))
        break;
        case 1:
        if(Math.floor(seconds * ((1 / 60) * (1 / 60) * (1 / 24))) >= 365){
          return Math.floor(seconds * ((1 / 60) * (1 / 60) * (1 / 24))) % 365
        }
        else{
          return Math.floor(seconds * ((1 / 60) * (1 / 60) * (1 / 24)))
        }
        break;
        case 2:
        if(Math.floor(seconds * ((1 / 60) * (1 / 60))) >= 24){
          return Math.floor(seconds * ((1 / 60) * (1 / 60))) % 24
        }
        else{
          return Math.floor(seconds * ((1 / 60) * (1 / 60)))
        }
        break;
        case 3:
        if(Math.floor(seconds * ((1 / 60))) >= 60){
          return Math.floor(seconds * ((1 / 60))) % 60
        }
        else{
          return Math.floor(seconds * ((1 / 60)))
        }
        break;
        case 4:
        return seconds % 60
        break;
        default:
        return "invalid component"
    }
  }
  let componentsCounts = {}
  for(let component = 0; component < 5; component++){
    if(formatComponent(seconds, component) !== 0){
      componentsCounts[component] = formatComponent(seconds, component)
    }
  }
  let stringFormat = []
  for(let componentString = 0; componentString < 5; componentString++){
    if(componentsCounts[componentString]){
      let durationCount = componentsCounts[componentString]
      let durationName = durationComponents[componentString]
      let plurality = durationCount > 1? "s": "";
      let durationSize = Object.keys(componentsCounts).length
      let and = `${componentString}` === Object.keys(componentsCounts)[durationSize - 1]? "and ": "";
      let comma = `${componentString}` <= Object.keys(componentsCounts)[durationSize - 3]? ",": "";
      if(durationSize > 2){
        stringFormat.push(`${and}${durationCount} ${durationName}${plurality}${comma}`)
      }
      else if(durationSize === 2){
        stringFormat.push(`${and}${durationCount} ${durationName}${plurality}`)
      }
      else{
        stringFormat.push(`${durationCount} ${durationName}${plurality}`)
      }
    }
  }
  return stringFormat.join(" ") === ""? "now":stringFormat.join(" ");
}
console.log(formatDuration(1660))
