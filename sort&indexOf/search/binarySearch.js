// 时间复杂度：O(log N) 每次搜索都是原来的一半
Array.prototype.binarySearch = function(target) {
  this.sort(); // 必须是有序数组
  // 搜索的下标范围，因为要折半搜索
  let low = 0; // 数组的最‘小’下标
  let height = this.length - 1; // 数组搜索的最‘大’下标
  while(low <= height) {
    const mid = (low + height) >> 1; // Math.floor((low + height) / 2);
    const element = this[mid]; // 中间元素
    if (element < target) { // 需要跳转到较大的那一半数组搜索
      low = mid + 1;
    } else if (element > target) { // 需要换到较小的那一半数组搜索
      height = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

const res = [1, 2, 3, 4, 5, 6].binarySearch(0);
console.log(res);
