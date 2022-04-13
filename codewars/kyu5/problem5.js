//checking if a string is alphanumeric
//output: true, false
//input: string, could include _ or ! which disqualify, or any " "
//used regex filter to see if either alpha or numeric, then if they
//don't contain special characters, return true. Anything else is false


function alphanumeric(string){
  let alphNumChar
  if(string.trim() !== ""){
    if(string.split(" ").length <= 1){
      for(let i = 0; i < string.length; i++){
        if(/[a-zA-Z]/.test(string) || /[0-9]/.test(string)){
          if(!/[_!]/.test(string)){
            return true
          }
        }
      }
    }
  }
  return false
}

alphanumeric("PassW0rd")
alphanumeric("hello world_")
