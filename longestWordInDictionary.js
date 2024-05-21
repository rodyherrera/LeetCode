/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words){
    // Create a set for efficient lookup
    let wordSet = new Set(words);
    let result = '';
    // Sort the words lexicographically
    words.sort();
    for(let word of words){
        let valid = true;
        // Check if all prefixes of the current word exists in the set
        for(let i = 1; i < word.length; i++){
            if(!wordSet.has(word.substring(0, i))){
                valid = false;
                break;
            }
        }
        // Update the result to the current word if all prefixes exists
        if(valid && word.length > result.length) result = word;
    }
    return result;
};