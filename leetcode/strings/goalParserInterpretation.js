/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    let cmdMap = { "G": "G", "()": "o", "(al)": "al" }

    let test = ""
    let output = ""
    for(let i=0; i < command.length;i++){
        test += command[i]

        if( cmdMap[test] !== undefined ) {
            output += cmdMap[test]
            test = ""
        }
    }
    return output
};

/*
Example 1:
Input: command = "G()(al)"
Output: "Goal"
Explanation: The Goal Parser interprets the command as follows:
G -> G
() -> o
(al) -> al
The final concatenated result is "Goal".

Example 2:
Input: command = "G()()()()(al)"
Output: "Gooooal"

Example 3:
Input: command = "(al)G(al)()()G"
Output: "alGalooG"

*/

console.log(interpret("G()(al)"))
console.log(interpret("G()()()()(al)"))
console.log(interpret("(al)G(al)()()G"))