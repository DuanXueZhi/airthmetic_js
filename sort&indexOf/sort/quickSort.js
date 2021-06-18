// 时间复杂度：O(n * log n)
Array.prototype.quickSort = function () {
  // 递归，O(log n)【劈成两半】
  const rec = (arr) => {
    if (!arr.length) return [];
    if (arr.length === 1) return arr;
    // 分区，O(n)
    const left = []; // 小于基准的子数组
    const right = []; // 大于基准的子数组
    const mid = arr[0]; // 基准元素
    for (let i = 1; i < arr.length; i += 1) {
      if (arr[i] < mid) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...rec(left), mid, ...rec(right)]; // 拼接并返回
  }
  const res = rec(this);
  res.forEach((e, i) => { this[i] = e; }); // 逐个copy
  console.log(this);
};

const arr = [2, 5, 3, 6, 7];
arr.quickSort();
