function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
    //   console.log(char)
      if (seen[char]) {
        start = Math.max(start, seen[char]);
        console.log(start);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    //   console.log(seen[char]);
    }
    // return longest;
  }

  console.log(findLongestSubstring('rithmschool'));

//   console.log(findLongestSubstring('rithmschool'));
//   console.log(findLongestSubstring('thisisawesome'));
//   console.log(findLongestSubstring('thecatinthehat'));
//   console.log(findLongestSubstring('bbbbb'));
//   console.log(findLongestSubstring('longestsubstring'));
//   console.log(findLongestSubstring('thisisshowwedoit'));