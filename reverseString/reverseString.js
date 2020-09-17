const reverseString = function(givenString) {
    let stringArray = givenString.split('');
    console.log(stringArray);
    let reversedArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        reversedArray[stringArray.length - 1 - i] = stringArray[i];
    }
    return reversedArray.join('');
}

module.exports = reverseString
