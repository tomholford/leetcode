function charCount(input: string) {
  let rabbit = 0;
  let turtle = 0;
  let output = '';

  while(rabbit < input.length) {
    const initialChar = input[turtle];
    const curChar = input[rabbit];

    if(initialChar === curChar) {
      // current char is still contiguous
      rabbit += 1;

    } else {
      // rabbit is on a new char

      // add the cur char + delta to the output
      output = `${output}${initialChar}${rabbit - turtle}`;

      // move the pointers
      turtle = rabbit;
    }

    // break case
    if(rabbit === input.length) {
      output = `${output}${initialChar}${rabbit - turtle}`;
      break;
    }
  }

  return output;
}

console.log(charCount("a") === 'a1');
console.log(charCount("aaa") === 'a3');
console.log(charCount("aaaabb") === 'a4b2');
console.log(charCount("aabbbcccaa") === 'a2b3c3a2');
