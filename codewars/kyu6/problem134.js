// Parameters: Given a word as a string
// Return: Return whether or not (true/false) the word has been capitalized correctly, according to three rules:
// 1) The word is an acronym, i.e. 'SCRUM' in all caps
// 2) The word is a plain word, i.e. 'potatoes' no caps
// 3) The word is at the beginning of a sentence, or is a pronoun or noun, i.e. 'Bob,' or 'Sometimes'

// Examples:

// detectCapitalUse('TEaparty') => false
// detectCapitalUse('Representation') => true
// detectCapitalUse('IRS') => true
// detectCapitalUse('taxatioN') => false
// detectCapitalUse('without') => true

var detectCapitalUse = function(word) {
    let test = word.split("").filter(x => x.toLowerCase() !== x)
    if(test.length === word.length){
        return true
    }else{
        if(word.length === 1){
            return true
        }else{
            if(test.length < word.length){
                if(test.length === 1){
                    if(word[0].toLowerCase() !== word[0]){
                        return true
                    }else{
                        return false
                    }
                }else{
                    if(word.toLowerCase() === word){
                        return true
                    }else{
                        return false
                    }
                }
            }
        }
    }
};