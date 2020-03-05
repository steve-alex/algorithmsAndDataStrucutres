var lengthOfLongestSubstring = function(s) {
  let charCount = {}
  let currentIndex = 0;
  let longest = 1;
  for (let i = 0; i < s.length; i++){
    if (charCount[s[i]] === undefined){
      charCount[s[i]] = 1;
    } else{
      let length = i - currentIndex;
      if (length > longest){
        longest = length
      }
      currentIndex = i;
      charCount = {};
      charCount[s[i]] = 1;
    }
  }
  return longest;
}

console.log(lengthOfLongestSubstring("aabatc"))


