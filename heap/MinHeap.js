class MinHeap{
  constructor() { // 类构建函数
    this.heap = [];
  }
  shiftUp(index) {

  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1); // 上移操作
  }
}
