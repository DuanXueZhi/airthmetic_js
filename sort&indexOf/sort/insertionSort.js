// 时间复杂度：O(n^2)
Array.prototype.insertionSort = function () {
  for(let i = 1; i < this.length; i++) {
    const temp = this[i]; // 保存下标为i的值
    let j = i;
    while (j > 0) {
      j--;
      if (temp > this[j]) {
        break; // 跳出整个循环
      } else {
        this[j + 1] = this[j];
      }
    }
    this[j + 1] = temp; // 循环结束，将j + 1下标的数组值改成temp
  }
  console.log(this);
};

const arr = [7, 5, 3, 6, 2];
arr.insertionSort();
