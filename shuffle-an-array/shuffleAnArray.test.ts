import Solution from './shuffleAnArray'

describe('#randomNumber', () => {
  const instance = new Solution([]);

  describe('when small range', () => {
    it('within range', () => {
      const start = 0;
      const end = 5;

      // since it's random, let's run it a few times to be sure
      let counter = 0;
      while(counter < 200) {
        let result = instance.randomNumber(start, end);

        expect(result).toBeGreaterThanOrEqual(start);
        expect(result).toBeLessThanOrEqual(end);

        counter++;
      }
    })
  })
})

describe('#swapAt', () => {
  const instance = new Solution([]);

  describe('when 1 element', () => {
    it('no-ops', () => {
      const ary = [1];

      expect(instance.swapAt(ary, 0, 0)).toEqual([1]);
    })
  })

  describe('when 3 elements and swap first and third', () => {
    it('swaps the 1st and 3rd', () => {
      const ary = [1, 2, 3];

      expect(instance.swapAt(ary, 0, 2)).toEqual([3, 2, 1]);
    })
  })
})
