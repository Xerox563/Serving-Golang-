function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;

  for (let ch of str) {
    if (vowels.includes(ch)) {
      count++;
    }
  }
  console.log("Count of Vowels: ", count);
}

module.exports = {countVowels};
