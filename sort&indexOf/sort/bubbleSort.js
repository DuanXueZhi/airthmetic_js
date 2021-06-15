// 时间复杂度：O(n^2)
Array.prototype.bubbleSort = function () { // 冒泡排序绑定到数组原型链上
  console.log(this); // this指向自己
  for(let i = 0; i < this.length - 1; i += 1) {
    for(let j = 0; j < this.length - i - 1; j += 1) {
      if (this[j] > this[j + 1]) {
        const temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
};

const arr = [2, 5, 3, 6, 7];
arr.bubbleSort();
