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
  getLeftIndex(i) { // 获取左侧节点
    return i * 2 + 1;
  }
  getRightIndex(i) { // 获取右侧节点
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index === 0) return; // 已上移到堆顶
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) { // 交换
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex); // 再次判断上移
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1); // 上移操作
  }
  pop() {
    this.heap[0] = this.heap.pop(); // 将数组末尾元素替换到数组头部，并删除末尾元素
    this.shiftDown(0); // 下移操作
  }
  peek() { // 获取堆顶
    return this.heap[0];
  }
  size() {// 获取堆的大小
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(1);
h.pop();

function findKthLargest(nums, k) {
  if (!nums.length) return;
  const heap = [];
  const shiftUp = (index) => {
    if (index === 0) return;
    const parentIndex = index - 1;
    if (heap[parentIndex] < heap[index]) {
      let temp = heap[parentIndex];
      heap[parentIndex] = heap[index];
      heap[index] = temp;
      shiftUp(parentIndex);
    }
  }
  nums.forEach((e, index) => {
    if (heap.length === k) {
      if (heap[heap.length - 1] < e) {
        heap[heap.length - 1] = e
        shiftUp(k - 1);
      }
    } else {
      heap.push(e);
      shiftUp(index);
    }
  })
  console.log(heap);
  return heap[heap.length - 1];
};

findKthLargest([3,2,3,1,2,4,5,5,6], 4)

function findKthLargest1(nums, k) {
  if (!nums.length) return;
  const heap = [];
  const shiftDown = (index) => {
    if (index === heap.length - 1) return;
    const leftIndex = index * 2 + 1;
    const rightIndex = index * 2 + 2;
    if (heap[leftIndex] < heap[index]) {
      const temp = heap[leftIndex];
      heap[leftIndex] = heap[index];
      heap[index] = temp;
      shiftDown(leftIndex);
    }
    if (heap[rightIndex] < heap[index]) {
      const temp = heap[rightIndex];
      heap[rightIndex] = heap[index];
      heap[index] = temp;
      shiftDown(rightIndex);
    }
  }
  nums.forEach((e, index) => {
    if (heap.length === k) {
      if (heap[0] < e) {
        heap[0] = e;
        shiftDown(0);
      }
    } else {
      heap.unshift(e);
      shiftDown(0);
    }
  })
  return heap[0];
};

// 时间复杂度：n * logK，(insert, pop时间复杂度是logk，k是堆的大小)，时间复杂度O(k)
function findKthLargest2(nums, k) {
  const h = new MinHeap();
  nums.forEach(n => {
    h.insert(n);
    if (h.size() > k) {
      h.pop();
    }
  })
  return h.peek();
};
