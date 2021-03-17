class Solution {
  nums: number[] = [];
  original: number[] = [];

  constructor(nums: number[]) {
    this.nums = nums;
    this.original = [...nums];
  }

  swapAt(array: number[], i: number, j: number): number[] {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;

    return array;
  }

  randomNumber(start: number, end: number): number {  
    const min = Math.ceil(start); 
    const max = Math.floor(end); 
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }  

  reset(): number[] {
    this.nums = this.original;
    this.original = [...this.original]

    return this.original;
  }

  shuffle(): number[] {
    for (let i = 0; i < this.nums.length; i++) {
      this.nums = this.swapAt(this.nums, i, this.randomNumber(i, this.nums.length - 1));      
    }
  
    return this.nums;
  }
}

/**
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(nums)
* var param_1 = obj.reset()
* var param_2 = obj.shuffle()
*/

export default Solution;

