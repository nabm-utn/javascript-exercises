const sumAll = function(a, b) {
    let increment = 1;
    if (a > b) {increment = -1;}
    let sum = 0;

    if (typeof a != "number" || typeof b != "number"){
        return "ERROR";
    } else if (a < 0 || b < 0) {
        return "ERROR";
    }

    for (let i = a; i != b; i += increment) {
        sum += i;
    }

    return sum + b;

};

module.exports = sumAll;
