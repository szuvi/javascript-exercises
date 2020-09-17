const sumAll = function(startNumber, endNumber) {
    let sum = 0;

    if (startNumber < 0 || endNumber < 0 || typeof startNumber !== "number" || typeof endNumber !== "number") {
        return "ERROR";
    }

    let newStartNumber = startNumber; 
    let newEndNumber = endNumber;

    if (startNumber > endNumber) {
        newStartNumber = endNumber;
        newEndNumber = startNumber;
    }

    for (let i = newStartNumber; i <= newEndNumber; i++) {
        sum += i;
    }
    return sum;
}

module.exports = sumAll
