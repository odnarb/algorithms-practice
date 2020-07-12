function caesarCipherEncryptor(string, key) {
    //first we need to create the cipher array per the offset we're given
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    let encryptedString = "";

    //loop through the string and encrypt as we go
    for(let i=0; i < string.length;i++){
        let encryptedChar = alphabet[ (alphabet.indexOf( string[i] )+key) % alphabet.length ];

        encryptedString += encryptedChar;
    }
    return encryptedString;
}

console.log( caesarCipherEncryptor("xyz", 2) );