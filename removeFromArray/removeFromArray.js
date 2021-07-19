const removeFromArray = function(inputArray) {
    let outputArray = [];
    let removed = [];
    for (let i = 1; i < arguments.length; i++) {
        removed.push(arguments[i]);
    }
    for (let i = 0; i < inputArray.length; i++) {
        if (removed.includes(inputArray[i])) {
            continue;
        } else {
            outputArray.push(inputArray[i]);
        }
    }
    return outputArray;

};

module.exports = removeFromArray;
