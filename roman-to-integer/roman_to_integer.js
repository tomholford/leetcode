let valueMap = new Map();
valueMap.set('I', 1);
valueMap.set('V', 5);
valueMap.set('X', 10);
valueMap.set('L', 50);
valueMap.set('C', 100);
valueMap.set('D', 500);
valueMap.set('M', 1000);

const subtractOne = /I[V|X]/;
const subtractTen = /X[L|C]/;
const subtractHundred = /C[D|M]/;

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const result = s.split('').reduce((memo, current, index, array) => {
    const hasNext = index !== array.length - 1;
    if(hasNext) {
      const pair = current + array[index + 1];
      if(subtractOne.test(pair)) {
        return memo - 1;
      } else if (subtractTen.test(pair)) {
        return memo - 10;
      } else if (subtractHundred.test(pair)) {
        return memo - 100;
      } else {
        return memo + valueMap.get(current);
      }
    } else {
      return memo + valueMap.get(current);
    }
  }, 0);
  return result;
};