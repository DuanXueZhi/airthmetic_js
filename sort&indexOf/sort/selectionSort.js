// 时间复杂度：O(n^2)
Array.prototype.selectionSort = function () {
  // 多次循环，将剩余的内容使用该循环
  for(let i = 0; i < this.length - 1; i++) {
    // 单次循环找到最小值并交换到第一位
    let indexMix = i;
    for(let j = i; j < this.length; j++) {
      if (this[j] < this[indexMix]) indexMix = j;
    }
    if (indexMix !== i) {
      const temp = this[i];
      this[i] = this[indexMix];
      this[indexMix] = temp;
    }
  }
  console.log(this);
};

const arr = [2, 5, 3, 6, 7];
arr.selectionSort();
