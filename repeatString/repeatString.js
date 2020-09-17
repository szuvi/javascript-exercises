const repeatString = function(givenString, repetiton) {
    if (repetiton < 0) {
        return 'ERROR';
    }
    let returnString = '';
    for (i = 0; i < repetiton; i++) {
        returnString += givenString;
    }
    return returnString;
}

module.exports = repeatString
