function countConsonants(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let ch of str.toLowerCase()) {
    if (ch >= "a" && ch <= "z" && !vowels.includes(ch)) {
      count++;
    }
  }
  console.log("Count of Constants: ", count);
}

module.exports = {countConsonants};
