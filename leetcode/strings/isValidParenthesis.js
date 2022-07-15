/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let stack = []

    // loop over string
    for(let i=0; i < s.length;i++){
        let ch = s[i]
        if(ch === "(") {
            stack.push(")")
        } else if(ch === "[") {
            stack.push("]")
        } else if(ch === "{") {
            stack.push("}")
        } else {
            if( ch !== stack.pop() ) return false
        }
    }
    if(stack.length > 0) return false
    return true
};

// Totally unprepared for stacks..

console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))