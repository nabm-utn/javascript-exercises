const palindromes = function (string) {
let straight = Array.from(string.toLowerCase())
straight = straight.filter(char => /^[a-z]+$/.test(char))
reverse = [...straight].reverse();
for (let i = 0; i < straight.length; i++) {
    if (straight[i] !== reverse[i]) return false;
} return true;
}; 

module.exports = palindromes;
