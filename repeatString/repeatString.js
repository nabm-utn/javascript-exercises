const repeatString = function(inputString, repetitions) {
    if (repetitions < 0) {
        return "ERROR";
    }
    outputString = "";
    for (let i = 0; i < repetitions; i++) {
        outputString += inputString;
    } 
    return outputString;
};

module.exports = repeatString;
