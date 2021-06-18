// 时间复杂度：O(n)
Array.prototype.sequentialSearch = function(target) {
  for(let i = 0; i < this.length; i++) {
    if (this[i] === target) return i;
  }
  return -1;
}

const res = [1, 2, 3, 4, 5, 6].sequentialSearch(0);
console.log(res);
