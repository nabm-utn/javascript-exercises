const findTheOldest = function(array) {
    let sortedArray = array.sort((a, b) => {
        const birthA = a.yearOfBirth;
        let deathA = a.yearOfDeath;
        if (!deathA) deathA = new Date().getFullYear();
        const ageA = deathA - birthA;

        const birthB = b.yearOfBirth;
        let deathB = b.yearOfDeath;
        if (!deathB) deathB = new Date().getFullYear();
        const ageB = deathB - birthB;

        return ageA < ageB ? 1: -1;
    })
    return sortedArray[0];
};

module.exports = findTheOldest;
