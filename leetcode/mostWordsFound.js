/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    if(sentences.length === 0) return 0

    let mostWords = 0

    for(let i=0; i < sentences.length;i++){
        let numSpaces = 0
        for(let j=0; j < sentences[i].length;j++){
            if( sentences[i][j] === " ") { numSpaces += 1 }
        }
        if(numSpaces+1 > mostWords) mostWords = numSpaces+1
    }
    return mostWords
};

/*
More elegant soln..
var mostWordsFound = function(sentences) {
    if(sentences.length === 0) return 0

    let mostWords = 0

    for(let i=0; i < sentences.length;i++){
        let sentence = sentences[i]
        let numWords = sentence.split(" ").length
        if(numWords > mostWords) mostWords = numWords
    }
    return mostWords
};
*/