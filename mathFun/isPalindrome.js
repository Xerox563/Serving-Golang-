function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversed = str.split("").reverse().join("");
  console.log("Is String Palindrome: ", str === reversed);
}

module.exports = {isPalindrome};
