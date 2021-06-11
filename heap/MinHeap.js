class MinHeap{
  constructor() { // 类构建函数
    this.heap = [];
  }
  swap(i1, i2) { // 交换方法
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) { // 获取父元素
    // return Math.floor((i - 1) / 2);
    return (i - 1) >> 1; // >>：转换为二进制后向右移一位（相当于除以2取整）
  }
  shiftUp(index) {
    if (index === 0) return; // 已上移到堆顶
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) { // 交换
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex); // 再次判断上移
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1); // 上移操作
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
