/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let hashOrig = {}
    let hashDest = {}
    
    for(let i=0; i < s.length;i++){
        if( hashOrig[ s[i] ] === undefined && hashDest[ t[i] ] === undefined ){
            hashOrig[ s[i] ] = t[i]
            hashDest[ t[i] ] = s[i]
        } else if( s[i] !== hashDest[ t[i] ] ){
            return false
        }
    }
    return true
};