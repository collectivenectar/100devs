// Parameters: Given a string containing three types of combinations of strings:
// "G", "()", and "(al)"
// Return: Parse the given string combinations according to the following rules:
// "G" => "G"
// "()" => "o"
// "(al)" => "al"
// Examples:

// interpret("G()()()()(al)") => "Gooooal"
// interpret("(al)G(al)()()G") => "alGalooG"

// Pseudocode:

// I start with three variables: 
// 'results' to store the results
// 'inner' as both temporary storage and as a check to see if the combination is () or (al)
// 'open' as a logic switch for open and closed parentheses.

// Then, I begin a loop, and each time:
// Check for the easiest character, "G"
// If not a "G", it's either a (, ), a, or l.
// If a "(", set 'open' to true, and move on.
// If in the next loop the current character is not a ')', and 'open' is still true, I'm
// dealing with an '(al)' combination. Add the current character to 'inner', and move on.
// If I get to a ")" and inner has nothin in it, I'm dealing with a '()' combo. Add "o" to results.
// If inner has something in it, I just finished a "(al)" - set inner to "", and set open to false
// to start the logic switch back to normal, and move on to the next.
// By the time I've finished the loop, return what's in results, and done!


var interpret = function(command) {
    let results = ""
    let inner = ""
    let open = false
    for(let each = 0; each < command.length; each++){
        if(command[each] === "G"){
            results = results + "G"
        }else if(command[each] === "("){
            open = true
        }else if(open){
            if(command[each] !== ")"){
                inner = inner + command[each]
                results = results + command[each]
            }else{
                if(inner !==""){
                    open = false
                    inner = ""
                }else{
                    results = results + "o"
                }
            }
        }
    }
    return results
};