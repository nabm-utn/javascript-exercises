const reverseString = function(inputString) {
    let outputString = "";
    const length = inputString.length;
    for (let i = length - 1; i >= 0; i--) {
        outputString += inputString[i];
    }
    return outputString;

};

module.exports = reverseString;
