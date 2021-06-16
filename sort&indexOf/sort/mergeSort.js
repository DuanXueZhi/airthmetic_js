// 时间复杂度：O(n*log n)
Array.prototype.mergeSort = function () {
  const rec = (arr) => {
    if (arr.length === 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const orderLeft = rec(left);
    const orderRight = rec(right);
    // 合并
    const res = [];
    while (orderLeft.length || orderRight.length) {
      if (orderLeft)
    }
  };
  rec(this);
  console.log(this);
};

const arr = [2, 5, 3, 6, 7];
arr.mergeSort();
